#! /bin/sh
echo 'git submodule update --recursive'
git submodule update --recursive

echo 'cd backbone'
cd backbone


echo 'checking out latest tag'
git pull origin master
git fetch --tags
latestTag=$(git describe --tags `git rev-list --tags --max-count=1`)
git checkout $latestTag

echo 'npm install'
npm install

echo 'cp index.js backbone/node_modules/underscore/underscore.js'
cp index.js backbone/node_modules/underscore/underscore.js
cp index.js backbone/node_modules/underscore/underscore-min.js

echo 'npm test'
npm test

echo 'cd ..'
cd ..

echo 'check size'
node ./check-size.js