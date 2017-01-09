// load the project model
const Project = require('./models/project');

// expose the routes to our app with module.exports
module.exports = function(app) {

  // api ---------------------------------------------------------------------
  require('./app/routes.js')(app);
  
  // application -------------------------------------------------------------
  app.get('*', function(req, res) {
      res.sendfile('../public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
  });

};
