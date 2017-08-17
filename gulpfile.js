'use strict';

var gulp = require('gulp');
var btccoreTasks = require('btccore-build');

btccoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
