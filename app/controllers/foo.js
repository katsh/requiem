foo = {



	sayHello: function(req, res) {
		res.send('Foo controller says hi!');
	}
}


module.exports.sayHello = foo.sayHello;


