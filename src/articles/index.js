define(function (require, module, exports) {
	var articles = [
		require('yaml!./article_1.yml'),
		require('yaml!./article_2.yml'),
		require('yaml!./article_3.yml'),
		require('yaml!./article_4.yml')
	];
	var template = require('hbs!./article');

	//module.exports = template(data);
	return articles.map(template);
});
