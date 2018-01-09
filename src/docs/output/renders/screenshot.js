var webpage = require('webpage').create();


webpage.viewportSize = { width: 800, height: 1000 };

webpage.open('http://127.0.0.1:5500/book-template/src/docs/html/cover.html', function() {
    webpage.zoomFactor = 0.5;
    webpage.render('bollocks7.png');
    webpage.zoomFactor = 2.5;
    webpage.render('bollocks6.jpg');

    phantom.exit();
});




