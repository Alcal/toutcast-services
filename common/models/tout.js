module.exports = function(Tout) {
	Tout.nearby = function(loc, rad, cap, callback)
	{
		if (typeof rad === 'function') {
	      rad = 2;
	    }

	    if (typeof cap === 'function') {
	      cap = 20;
	    }

	    rad = rad || 2;
	    cap = cap || 20;

		Tout.find({
	      // find locations near the provided GeoPoint
	      where: {location: {near: loc, maxDistance: rad}},
	      limit: cap
	    }, function(err, models){
	    	callback(null,models);
	    	console.log(models);
	    });
	};

	Tout.remoteMethod(
		'nearby',
		{
			accepts:[
				{arg:"loc",type:"GeoPoint", required:true},
				{arg:"rad",type:"Number"},
				{arg:"cap",type:"Number"}
				],
			returns:{arg:"touts"},
			http:{verb:"get", status:200, errorStatus:400}
		}
	);
};
