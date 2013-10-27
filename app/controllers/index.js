index = {

	/*
	 * req and res will be passed from routes.js
	 */
	req: null,
	res : null,
	model: require('../models/index'),

	render: function(req, res) {
		
		res.render('index', index.model)
	}
	

}





/* Add the methods you'd like to export here. You
 * will then be able to access these in routes.js
 */
module.exports.render = index.render


