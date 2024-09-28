#!/bin/bash

ng build --output-path docs --base-href /

mv docs/browser/* docs/
rmdir docs/browser || rm -r docs/browser

cp docs/index.html docs/404.html
