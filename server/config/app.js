var //config = require('./config'),
    mongoose = require('mongoose'),
    express = require('./express');

module.exports.start = function() {
  var app = express.init();
  var port = process.env.PORT || 3000;
  app.listen(port, function() {
    //console.log("App listening on port %d in %s mode", this.address().port, app.settings().env);
  });
};
