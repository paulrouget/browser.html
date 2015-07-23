#!/bin/sh

set -e
set -x #debug

tmp=`mktemp -d 2>/dev/null || mktemp -d -t 'browserhtml'`

rm -rf dist
mkdir dist

./node_modules/requirejs/bin/r.js -o ./build.js out=$tmp/built.js
babel $tmp/built.js > $tmp/es5.js
uglifyjs --screw-ie8 $tmp/es5.js > dist/main.js
uglifyjs --screw-ie8 node_modules/requirejs/require.js > dist/require.js

cp -r css manifest.webapp net_error.html dist
cp index-dist.html dist/index.html

rm $tmp/built.js
rm $tmp/es5.js
rmdir $tmp

