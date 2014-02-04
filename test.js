'use strict';
var fs = require('fs');
var assert = require('assert');
var gutil = require('gulp-util');
var cssmin = require('./index');

it('should minify css', function (cb) {
	var stream = cssmin();

	stream.write(new gutil.File({
		path: __dirname + '/sample/test.css',
		contents: fs.readFileSync(__dirname + '/sample/test.css')
	}));
});
