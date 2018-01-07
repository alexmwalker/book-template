var webpage = require('webpage').create();

webpage.open('http://127.0.0.1:5500/book-template/src/docs/output/renders/3d.html', function() {
    webpage.render('3d2.png');
    phantom.exit();
});