require(['MathJax', './articles/index'], function (MathJax, htmls) {
	htmls.forEach(postArticle);

	MathJax.Hub.Queue(['Typeset', MathJax.Hub]);

	function postArticle(html) {
		var div = document.createElement('div');
		div.innerHTML = html;
		document.body.appendChild(div);
	}
}, function (err) {
	console.debug(err);
});
