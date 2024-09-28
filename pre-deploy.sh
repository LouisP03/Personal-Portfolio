#!/bin/bash

ng build --output-path docs --base-href /

mv docs/browser/* docs/
rmdir docs/browser || rm -r docs/browser

cp docs/index.html docs/404.html

echo "www.louisparkes.co.uk" > docs/CNAME

#sed -i 's/^[ \t]*//;s/[ \t]*$//' docs/3rdpartylicenses.txt
rm docs/3rdpartylicenses.txt || true


git add .
