// Make sure final result is smaller that underscore

var gzipSize = require('gzip-size');
var fs = require('fs');

fs.readFile('./browser.min.js', function (err, fileStream) {
  if (err) {
    return console.error(err);
  }

  var size = gzipSize.sync(fileStream.toString());
  if(size >= 5300) {
    console.log('Size is larger that underscore itself(5300). Size: ' + size);
    process.exit(1);
  }
})
