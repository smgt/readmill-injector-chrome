#!/bin/sh

latest_tag=$(git describe --tags)
output_file=readmill-injector-$latest_tag.zip
zip $output_file manifest.json inject.js icon_48.png icon_128.png

echo $output_file built
