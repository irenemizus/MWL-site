#!/bin/bash

echo Backing the old dist up...
[ ! -d dist.old ] || rm -rf dist.old
[ ! -d dist ] || mv dist dist.old

mkdir -p dist
echo Copying public...

cp public/*.json dist/
cp public/web.config dist/
cp -r public/Papers_pdf dist/
cp -r public/img dist/
cp -r public/water_dimer_press_pdf dist/

echo Building react part...
./node_modules/.bin/webpack --optimize-minimize
