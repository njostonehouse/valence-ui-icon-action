var page = require('webpage').create();
page.viewportSize = {width: 750, height: 1000};

function capture(name, width) {

	var clipRect = page.evaluate(function(n) {
		return document.querySelector('.screenshot-' + n)
			.getBoundingClientRect();
	}, name);

	page.clipRect = {
		top:    clipRect.top,
		left:   clipRect.left,
		width:  width || clipRect.width,
		height: clipRect.height
	};
	page.render('./screenshots/' + name + '.png');

}

page.open('./test/test.html', function() {
	capture('overview', 400);
	phantom.exit();
});
