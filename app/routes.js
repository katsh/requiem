module.exports = function(app) {

	var fs = require('fs');
	var controller = {};

	/*
	 * All controllers are in the /app/controllers/ directory.
	 * Dynamically load them all into the `controller` object.
	 * Access your controller with `controller[name]`. For 
	 * instance, `controller['index'].render(req, res)` will 
	 * call the index's controller's render() method.
	 */

	fs.readdirSync(__dirname + '/controllers').forEach(function(file) {
		file = file.substr(0, file.indexOf('.'));
		controller[file] = require('./controllers/' + file)
	})

	

	/********** The routes **********/

	app.get('/', function(req, res) {
		controller['index'].render(req, res);		
	});


	app.get('/foo', function(req, res) {
		controller['foo'].sayHello(req, res);
	});

}



