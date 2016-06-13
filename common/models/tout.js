const ionicPushClient = require('../proxy/ionicPushClient');
const loopback = require('loopback');

module.exports = function (Tout)
{

  /*
   * 	Searches for Touts based on a center point and a radius with an option for a cap
   *	GeoPoint loc : center point
   *	Number 	rad : search radius in miles
   */
  Tout.nearby = function (loc, rad, cap, callback)
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
      where: {location: {near: loc, maxDistance: rad}},
      limit: cap
    }, function (err, models)
    {
      callback(err, models);
    });
  };


  /*
   *	Takes an existing Tout and sends a Push Notification
   *	request with its information
   */
  Tout.publish = function (toutId, callback)
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

  };

  Tout.redeem = function (toutId, pin, callback)
  {
    if (typeof toutId === 'function')
    {
      const err = new Error('Invalid argument format for: toutId');
      callback(err);
    }
    Tout.findOne({where: {id: toutId}},
      function (searchError, tout)
      {
        if (err)
        {
          callback(searchError);
        }
        //Get the user that is claiming the offer
        var ctx = loopback.getCurrentContext();
        var currentUser = ctx && ctx.get('currentUser');

        tout.redemptions.findOne(
          {where:{toutUserId:currentUser.id}},
          function(countErr, redemption)
          {
            if(countErr)
            {
              callback(countErr);
            }
            if(redemption)
            {
              const usedErr = new Error('User has redeemed this Tout already');
              usedErr.name = "USED";
              usedErr.status = 403;
              callback(usedErr);
            }

            if (pin == tout.pin)
            {
              tout.redemptions.count(function(countError, redemptionCount)
              {
                if(countError)
                {
                  callback(countError);
                }
                if(redemptionCount >= tout.maxRedemptions)
                {
                  const maxErr = new Error('Max redemptions reached for this offer');
                  maxErr.name = "MAX";
                  maxErr.status = 403;
                  callback(maxErr);
                }


                tout.redemptions.create(
                  {approved: true, date: Date.now(), toutUser: currentUser || ""},
                  function (redemptionError, redemption)
                  {
                    if (redemptionError)
                    {
                      callback(redemptionError);
                    }
                    tout.remainingRedemptions = tout.maxRedemptions - redemptionCount - 1;
                    tout.save();
                    tout.redemption = redemption;
                    callback(null, tout);
                  });
              });
            }
            else
            {
              const pinErr = new Error('Pin did not match');
              pinErr.name = "PIN";
              pinErr.status = 403;
              callback(pinErr);
            }
          });
      });
  };


  //Remote method definitions
  Tout.remoteMethod(
    'nearby',
    {
      accepts: [
        {arg: "loc", type: "GeoPoint", required: true},
        {arg: "rad", type: "Number"},
        {arg: "cap", type: "Number"}
      ],
      returns: {arg: "touts"},
      http: {verb: "GET", status: 200, errorStatus: 400}
    }
  );

  Tout.remoteMethod(
    'publish',
    {
      accepts: [
        {arg: "toutId", type: "String", required: true}
      ],
      returns: {},
      http: {verb: "POST", status: 200, errorStatus: 400}
    }
  );

  Tout.remoteMethod(
    'redeem',
    {
      accepts: [
        {arg: "toutId", type: "String", required: true},
        {arg: "pin", type: "String", required: false}
      ],
      returns: {arg: "tout"},
      http: {verb: "POST", status: 200, errorStatus: 400}
    });
};
