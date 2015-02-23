#! /bin/sh

echo 'cd backbone'
cd backbone

echo 'npm install'
npm install

echo 'cp ./browser.js backbone/node_modules/underscore/underscore.js'
cp ./browser.js backbone/node_modules/underscore/underscore.js

echo 'cp ./browser.min.js backbone/node_modules/underscore/underscore-min.js'
cp ./browser.min.js backbone/node_modules/underscore/underscore-min.js


echo 'checking out latest tag'
git pull origin master
git fetch --tags
latestTag=$(git describe --tags `git rev-list --tags --max-count=1`)
git checkout $latestTag


echo 'npm test'
npm test

echo 'cd ..'
cd ..