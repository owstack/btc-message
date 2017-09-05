'use strict';
var gulp = require('gulp');
var owsTasks = require('ows-build');
owsTasks('btccore', 'message');
gulp.task('default', ['lint', 'coverage']);
