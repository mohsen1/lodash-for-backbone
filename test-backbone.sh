#! /bin/sh

echo 'npm install node_modules/backbone'
npm install node_modules/backbone

echo 'cp ./browser.js node_modules/backbone/node_modules/underscore/underscore.js'
cp ./browser.js node_modules/backbone/node_modules/underscore/underscore.js

echo 'cp ./browser.min.js node_modules/backbone/node_modules/underscore/underscore-min.js'
cp ./browser.min.js node_modules/backbone/node_modules/underscore/underscore-min.js


echo 'npm test node_modules/backbone'
cd node_modules/backbone
npm test