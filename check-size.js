// Make sure final result is smaller that underscore

var gzipSize = require('gzip-size');
var prettyBytes = require('pretty-bytes');
var fs = require('fs');
var UNDERSCORE_SIZE = 5300;

fs.readFile('./browser.min.js', function (err, fileStream) {
  if (err) {
    return console.error(err);
  }

  var size = gzipSize.sync(fileStream.toString());
  if(size >= UNDERSCORE_SIZE) {
    console.log('Size is larger that underscore itself(' + prettyBytes(UNDERSCORE_SIZE) + '). Size: ' + prettyBytes(size));
    process.exit(1);
  } else {
    console.log('Size is ' + prettyBytes(UNDERSCORE_SIZE - size) + ' smaller than underscore');
  }
})
