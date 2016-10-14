var HTTP = require('https');
var Promise = require('promise');

const IONIC_ENDPOINT='api.ionic.io';
const IONIC_API_KEY ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.'+
	'eyJqdGkiOiJhNGNiNDdhOC0zYzY1LTQ3NjgtYTI2OS03MmE3ZGUxMjIwMTAifQ.'+
	'zhDoRnOdu-Z2V2eztzIQGrvE909RDu44rw5pexHIJ2g';
const TEST_TOKEN = 'eZc81p20SaQ:APA91bHMNdJ2rX766bHuhUUtkmkIJIHStEIjpcWY_'+
	'prx3HWFhrn73XU5e0jZPlqo_CGMPI6x3vzMQ3NxMILbDc8nZ-'+
	'q3cYnPCLd0tO-0SO3rBzxrKZgK57ozhscqZXGA4V18mWvCJ_S1';

var ionicPushClient = {};
module.exports = ionicPushClient;
//The token must be passed along in the Http header Authorization,
// prefixed by the string 'Bearer ', such as:
//Authorization: Bearer abcde
ionicPushClient.sendToutNotification = function(tout)
{

	var pushTitle = tout.title||'Gran oferta';
	var pushMessage = tout.content||'Encuentrala en ToutCast';

	var pushRequestBody = JSON.stringify({
    'send_to_all': true,
	  'profile': 'dev_profile',
	  'notification': {
	    'title': pushTitle,
	    'message': pushMessage,
	    'ledColor':'[0,0,255,0]',
	    'android': {
	    	'title': pushTitle,
	    	'message': pushMessage,
	    	'payload': {
				'localeId':tout.localeId,
	            'toutId':tout.id,
	            'location':tout.location
	          },
	    	'ledColor': '[255, 255, 255, 255]'
	    },
	    'ios': {
	      'title': pushTitle,
	      'message': pushMessage
	    }
	  }
	});

	var options =
	{
		host:IONIC_ENDPOINT,
		headers:
		{
			'Authorization':'Bearer '+IONIC_API_KEY,
			'Content-Type':'application/json',
			'Content-Length': pushRequestBody.length
		},
		path:'/push/notifications',
		method:'POST'
	};

	//Variable that will store the chunks received
	//from the request
	var pushResponse = '';

	return new Promise(function(fulfill, reject)
	{
		var pushRequest = HTTP.request(options,
		function(res)
		{
			res.on('data', function(chunk)
			{
				//Here we concatenate the chunks we receive
				//so that we can return the whole thing
				//toghether when we're done
				pushResponse += chunk;
			});
			res.on('end', function(){
				fulfill(JSON.parse(pushResponse));
			});
		});

		pushRequest.on('error', function(err)
		{
			console.log('Will reject promise with:');
			console.log(err);
			reject(err);
		});

		pushRequest.write(pushRequestBody);
		pushRequest.end();

	});

};
