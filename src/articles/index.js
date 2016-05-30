define(function (require, module, exports) {
	var data = require('yaml!./article_1.yml');
	var template = require('hbs!./article');

	//module.exports = template(data);
	return template(data);
});
