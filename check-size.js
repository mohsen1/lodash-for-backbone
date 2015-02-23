// Make sure final result is smaller that underscore

var gzipSize = require('gzip-size');
var fs = require('fs');

fs.readFile('./browser.min.js', function (err, fileStream) {
  if (err) {
    return console.error(err);
  }

  if(gzipSize.sync(fileStream.toString()) >= 5300) {
    console.log('Size is larger that underscore itself');
    process.exit(1);
  }
})
