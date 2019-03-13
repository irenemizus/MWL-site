#!/bin/sh

mkdir -p dist
echo Copying public...

cp public/*.json dist/
cp -r public/Papers_pdf dist/
cp -r public/img dist/
cp -r public/mht dist/

echo Building react part...
./node_modules/.bin/webpack --optimize-minimize
