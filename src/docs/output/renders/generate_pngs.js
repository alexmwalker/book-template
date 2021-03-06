// How to: save as capture.js and run with "phantomjs capture.js"
// Setup by modifying URLS, PAGE_WIDTH AND PAGE_HEIGHT constants!
// Hint: set PAGE_WIDTH or PAGE_HEIGHT to 0 to capture full page!
// modified version of script at http://www.cameronjtinker.com/post/2011/09/26/Take-Screenshot-of-all-HTML-documents-in-a-folder-using-PhantomJS.aspx

var PAGE_WIDTH = 0;
var PAGE_HEIGHT = 0;

var URLS = [
  "http://127.0.0.1:5500/book-template/src/docs/html/cover.html",
  "http://127.0.0.1:5500/book-template/src/docs/html/cover-spread.html"
  //"http://127.0.0.1:5500/book-template/src/docs/output/renders/covers/cover-small.html"
];


// we need to use the HTML filename in naming the images



// phantomjs page object and helper flag
var page = require('webpage').create(),
  loadInProgress = false,
  pageIndex = 0;


// set clip and viewport based on PAGE_WIDTH and PAGE_HEIGHT constants
if (PAGE_WIDTH > 0 && PAGE_HEIGHT > 0) {
  page.viewportSize = {
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT
  };

  page.clipRect = {
    top: 0,
    left: 0,
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT
  };
}

// page handlers
page.onLoadStarted = function() {
  loadInProgress = true;
  console.log('page ' + (pageIndex + 1) + ' load started');
};


page.onLoadFinished = function() {
  loadInProgress = false;
  myURL = URLS[pageIndex].split("/");
  myfilename = myURL[myURL.length-1].split(".");
  console.log(myfilename[0]);
  //page.render("covers/cover" + (pageIndex + 1) + "_" + PAGE_WIDTH + "x" + PAGE_HEIGHT + ".jpg");
  page.render("covers/cover_" + myfilename[0] + ".png");
  console.log('page ' + (pageIndex + 1) + ' load finished');
  pageIndex++;
};

// try to load or process a new page every 250ms
setInterval(function() {
  if (!loadInProgress && pageIndex < URLS.length) {
    console.log("image " + (pageIndex + 1));
    page.open(URLS[pageIndex]);
  }
  if (pageIndex == URLS.length) {
    console.log("image render complete!");
    phantom.exit();
  }
}, 250);

console.log('Number of URLS: ' + URLS.length);