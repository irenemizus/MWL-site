#!/bin/sh

mkdir -p dist
echo Copying public...
cp public/papers_list.json dist/
cp -r public/Papers_pdf dist/

echo Copying assets...
OIFS="$IFS"
IFS=$'\n'
for f in `cd assets && find . -name '*?.*'`; do
  echo "Copying $f";
  mkdir -p `dirname dist/$f`;
  cp -r assets/$f dist/$f;
done
IFS="$OIFS"

echo Building react part...
./node_modules/.bin/webpack --optimize-minimize
