'use strict';

/*
########################################################################################################################################################################################################
### VARIABLES ###
########################################################################################################################################################################################################
*/
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

var config = require('../../gulp-config');


/*
########################################################################################################################################################################################################
### FUNCTIONS ###
########################################################################################################################################################################################################
*/
gulp.task('scripts', function () {
    return gulp
        .src(config.jsInputFiles)
        .pipe(sourcemaps.init())
        .pipe(concat(config.jsOutputFile))
        .pipe( gulp.dest(config.jsOutputDist))
        .pipe(rename(config.jsOutputFileMin))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.jsOutputDist));
});
