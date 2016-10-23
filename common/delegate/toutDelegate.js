/**
 * Created by aquaboy on 10/15/16.
 */
const ionicPushClient = require('../proxy/ionicPushClient');
const loopback = require('loopback');


module.exports = function(Tout)
{
    return {
        /*
         * 	Searches for Touts based on a center point
         * 	and a radius with an option for a cap
         *	GeoPoint loc : center point
         *	Number 	rad : search radius in miles
         */
        nearby : function (loc, rad, cap, callback)
        {
            if (typeof rad === 'function')
            {
                rad = 2;
            }
    
            if (typeof cap === 'function')
            {
                cap = 20;
            }
    
            rad = rad || 2;
            cap = cap || 20;
    
            Tout.find({
                // find locations near the provided GeoPoint
                where: {location: {near: loc, maxDistance: rad, live:true}},
                limit: cap
            }, function (err, models)
            {
                callback(err, models);
            });
        },

        /*
         *	Takes an existing Tout and sends a Push Notification
         *	request with its information
         */
        publish : function (toutId, callback)
        {

            if (typeof toutId === 'function')
            {
                const err = new Error('Invalid argument format for: toutId');
                callback(err);
            }
    
            var onFulfill = function (data)
            {
                callback(null, data);
            };
            var onReject = function (err)
            {
                console.log(err);
                callback(err);
            };
    
            Tout.findOne({where: {id: toutId}},
            function (err, tout)
            {
                if (err)
                {
                    callback(err);
                }

                tout.maxRedemptions = tout.maxRedemptions || 20;
                tout.remainingRedemptions = tout.maxRedemptions;
                tout.save();
                var pushPromise = ionicPushClient.sendToutNotification(tout);

                pushPromise.then(onFulfill, onReject);

            });
        },
        /*
         *	Attempts to perform a redemption on a Tout
         *  based on the id and the pin
         */
        redeem : function (toutId, pin, callback)
        {
            if (typeof toutId === 'function')
            {
                const err = new Error('Invalid argument format for: toutId');
                callback(err);
            }
            Tout.findOne({where: {id: toutId}},
            function (searchError, tout)
            {
                if (searchError)
                {
                    return callback(searchError);
                }
                if (tout == null)
                {
                    var toutError = new Error('Tout was not found');
                    toutError.name = 'NOT FOUND';
                    toutError.status = 404;
                    return callback(toutError);
                }
                //Get the user that is claiming the offer
                var ctx = loopback.getCurrentContext();
                var currentUser = ctx.get('currentUser');
        
                if (!currentUser)
                {
                    var currentUserError =
                        new Error('Must be an authenticated user');
                    currentUserError.name = 'FORBIDDEN';
                    currentUserError.status = 401;
                    return callback(currentUserError);
                }
        
                tout.redemptions.findOne(
                {where: {toutUserId: currentUser.id}},
                function (countErr, redemption)
                {
                    if (countErr)
                    {
                        return callback(countErr);
                    }
                    if (redemption)
                    {
                        const usedErr =
                            new Error('User has redeemed this Tout already');
                        usedErr.name = 'USED';
                        usedErr.status = 403;
                        return callback(usedErr);
                    }
        
                    if (pin === tout.pin)
                    {
                        tout.redemptions.count(
                        function (countError, redemptionCount)
                        {
                            if (countError)
                            {
                                return callback(countError);
                            }
                            if (redemptionCount >= tout.maxRedemptions)
                            {
                                const maxErr = new Error
                                ('Max redemptions reached for this offer');
                                maxErr.name = 'MAX';
                                maxErr.status = 403;
                                return callback(maxErr);
                            }
        
                            tout.redemptions.create(
                            {
                                approved: true,
                                date: Date.now(),
                                toutUser: currentUser || ''
                            },
                            function (redemptionError, redemption)
                            {
                                if (redemptionError)
                                {
                                    return callback(redemptionError);
                                }
                                tout.maxRedemptions = tout.maxRedemptions || 20;
                                tout.remainingRedemptions =
                                    tout.maxRedemptions - redemptionCount - 1;
                                tout.save();
                                tout.redemption = redemption;
                                return callback(null, tout);
                            });
                        });
                    }
                    else
                    {
                        const pinErr = new Error('Pin did not match');
                        pinErr.name = 'PIN';
                        pinErr.status = 403;
                        return callback(pinErr);
                    }
                });
            });
        }
    };
};