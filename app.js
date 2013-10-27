
/**
 * Module dependencies.
 */

var express = require('express');

var http = require('http');
var path = require('path');
var swig = require('swig')
var fs = require('fs')

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'app/views'));

/* Templating
 * Going with Swig instead of Jade, as it seems faster.
 * http://paularmstrong.github.io/node-templates/benchmarks.html
 */
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('view cache', false);
swig.setDefaults({ cache: false });



app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

/*
 * if app.router goes after express.static, the server will
 * server the static file in views/index.html first.
 */
app.use(app.router);
app.use(express.static('./public'));

/*
 * Routing. Here's where we would typically do
 * app.get('/', function() { ...}).
 * However, let's separate our routing from our main app.js
 * http://stackoverflow.com/questions/6059246/how-to-include-route-handlers-in-multiple-files-in-express
 */

require('./app/routes')(app);



// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


//app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
