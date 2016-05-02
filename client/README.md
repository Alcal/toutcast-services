## Client

This is the place for your application front-end files.

Use the LoopBack Angular command-line tool, lb-ng, to generate the Angular client library for your LoopBack application.  
Icon
Any time you modify or add models to your LoopBack app, you must re-run lb-ng to re-generate the Angular client library to reflect the changes.
For example, if your application has the standard LoopBack project layout, then in the /client sub-directory, enter these commands:
$ mkdir js
$ lb-ng ../server/server.js js/lb-services.js -m toutCastServices 
