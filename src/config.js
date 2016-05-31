var require = {
	paths: {
		text: '../lib/text/text',
		hbs: '../lib/require-handlebars-plugin/hbs',
		"js-yaml" : '../lib/js-yaml/dist/js-yaml',
		yaml : '../lib/require-yaml/yaml',
		MathJax: '../lib/mathjax/config/TeX-AMS_CHTML'
	},
	shim: {
		'MathJax': {
			deps: ['../lib/MathJax/MathJax'],
			exports: ['MathJax'],
			init: function () {
				window.MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
				return window.MathJax;
			}
		}
	}
};
