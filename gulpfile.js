'use strict';
var gulp = require('gulp');
var owsTasks = require('ows-build');
owsTasks('btc', 'message');
gulp.task('default', ['lint', 'coverage']);
