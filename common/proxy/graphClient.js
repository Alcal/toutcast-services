/**
 * Created by aquaboy on 5/10/16.
 */

const Http = require('https');
const QueryString = require('querystring');

const GRAPH_ENDPOINT = 'graph.facebook.com';

var graphClient = {};

module.exports = graphClient;

graphClient.getUserDetails = function (userToken, fields)
{

  var reducedFields = fields.reduce(function(last, current){return last + ',' +current},'id');

  var queryStringParams =
  {
    access_token:userToken,
    fields:reducedFields,
    format:'json'
  };

  var queryString = QueryString.stringify(queryStringParams);

  var options =
  {
    host: GRAPH_ENDPOINT,
    method: 'GET',
    path:'/v2.6/me'+queryString
  };

  //Variable that will store the chunks received
  //from the request
  var graphResponse = '';

  return new Promise(function(fulfill, reject)
  {
    var graphRequest = Http.request(options,
      function(res)
      {
        res.on('data', function(chunk)
        {
          //Here we concatenate the chunks we receive
          //so that we can return the whole thing
          //together when we're done
          graphResponse += chunk;
        });
        res.on('end', function(){
          fulfill(JSON.parse(graphResponse));
        })
      });

    graphRequest.on('error', function(err)
    {
      console.log("Will reject promise with:");
      console.log(err);
      reject(err);
    });

    graphRequest.write(pushRequestBody);
    graphRequest.end();
  });

};
