var loopback = require('loopback');
var boot = require('loopback-boot');


var app = module.exports = loopback();


//Part of Facebook login configuration
var PassportConfigurator =
    require('loopback-component-passport').PassportConfigurator;
var passportConfigurator = new PassportConfigurator(app);

app.use(loopback.context());
app.use(loopback.token());

app.use(function setCurrentUser(req, res, next) {
  if (!req.accessToken) {
    return next();
  }
  app.models.ToutUser.findById(req.accessToken.userId, function(err, user) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(new Error('No user with this access token was found.'));
    }
    var loopbackContext = loopback.getCurrentContext();
    if (loopbackContext) {
      loopbackContext.set('currentUser', user);
    }
    next();
  });
});

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('ToutCast Services started at at: %s', app.get('url'));
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});



// Enable Http session
app.use(loopback.session({ secret: 'fucking password' }));

// Load the provider configurations
var config = {};
try {
 config = require('./providers.json');
} catch(err) {
 console.error('Please configure your passport strategy in `providers.json`.');
 console.error('Copy `providers.json.template` to `providers.json`'+
                 ' and replace the clientID/clientSecret values' +
                 ' with your own.');
 process.exit(1);
}
// Initialize passport
passportConfigurator.init();

// Set up related models
passportConfigurator.setupModels({
 userModel: app.models.ToutUser,
 userIdentityModel: app.models.userIdentity,
 userCredentialModel: app.models.userCredential
});
// Configure passport strategies for third party auth providers
for(var s in config) {
 var c = config[s];
 c.session = c.session !== false;
 passportConfigurator.configureProvider(s, c);
}
