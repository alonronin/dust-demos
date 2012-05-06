
/**
 * Module dependencies.
 */

var express = require('express'),
    app = module.exports = express.createServer();

// Compiling Templates
require('./tools/dust_compile_templates');

// Configuration

app.configure(function(){
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

app.listen(8080, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
