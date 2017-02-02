#!/bin/sh
./node_modules/.bin/uglifyjs \
	src/jsmpeg.js \
	src/video-element.js \
	src/player.js \
	src/buffer.js \
	src/sio.js \
	src/ts.js \
	src/decoder.js \
	src/mpeg1.js \
	src/webgl.js \
	src/canvas2d.js \
	-o jsmpeg.min.js
