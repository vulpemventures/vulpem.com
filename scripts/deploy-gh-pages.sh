#!/bin/bash
node_modules/.bin/gulp bundle
node_modules/.bin/push-dir --dir=dist --branch=gh-pages