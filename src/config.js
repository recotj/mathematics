var require = {
	paths: {
		text: '../lib/text/text',
		hbs: '../lib/requirejs-handlebars/hbs',
		"js-yaml" : '../lib/js-yaml/dist/js-yaml',
		yaml : '../lib/requirejs-yaml/yaml',
		json: '../lib/requirejs-plugins/src/json',
		MathJax: '../lib/mathjax/config/TeX-AMS_CHTML'
	},
	shim: {
		'MathJax': {
			deps: ['../lib/mathjax/MathJax'],
			exports: ['MathJax'],
			init: function () {
				window.MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
				return window.MathJax;
			}
		}
	}
};
