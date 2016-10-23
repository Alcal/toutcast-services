const ionicPushClient = require('../proxy/ionicPushClient');
const loopback = require('loopback');
var toutDelegate = require('../delegate/toutDelegate');

module.exports = function (Tout)
{
    //Remote method definitions
    Tout.remoteMethod(
        'nearby',
        {
            accepts: [
                {arg: 'loc', type: 'GeoPoint', required: true},
                {arg: 'rad', type: 'Number'},
                {arg: 'cap', type: 'Number'}
            ],
            returns: {arg: 'touts'},
            http: {verb: 'GET', status: 200, errorStatus: 400}
        }
    );

    Tout.remoteMethod(
        'publish',
        {
            accepts: [
                {arg: 'toutId', type: 'String', required: true}
            ],
            returns: {},
            http: {verb: 'POST', status: 200, errorStatus: 400}
        }
    );

    Tout.remoteMethod(
        'redeem',
        {
            accepts: [
                {arg: 'toutId', type: 'String', required: true},
                {arg: 'pin', type: 'String', required: false}
            ],
            returns: {arg: 'tout'},
            http: {verb: 'POST', status: 200, errorStatus: 400}
        });

    /*
     * 	Searches for Touts based on a center point
     * 	and a radius with an option for a cap
     *	GeoPoint loc : center point
     *	Number 	rad : search radius in miles
     */
    Tout.nearby = function (loc, rad, cap, callback)
    {
        toutDelegate.nearby(loc, rad, cap, callback);
    };
    /*
     *	Takes an existing Tout and sends a Push Notification
     *	request with its information
     */
    Tout.publish = function (toutId, callback)
    {
        toutDelegate.publish(toutId, callback);
    };
    /*
     *	Attempts to perform a redemption on a Tout
     *  based on the id and the pin
     */
    Tout.redeem = function (toutId, pin, callback)
    {
        toutDelegate.redeem(toutId, pin, callback);
    };


};
