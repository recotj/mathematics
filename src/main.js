require(['MathJax', './articles/index'], function (MathJax, html) {
	var div = document.createElement('div');
	div.innerHTML = html;
	document.body.appendChild(div);
	MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
}, function (err) {
	console.debug(err);
});
