'use strict';

/*
########################################################################################################################################################################################################
### VARIABLES ###
########################################################################################################################################################################################################
*/
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

var config = require('../../../../gulp-config');


/*
########################################################################################################################################################################################################
### FUNCTIONS ###
########################################################################################################################################################################################################
*/
gulp.task('styles', function () {
    return gulp
        .src(config.cssInputFiles)
        .pipe(sourcemaps.init())
        .pipe(sass(config.sassOptions).on('error', sass.logError))
        .pipe(autoprefixer(config.autoprefixerOptions))
        .pipe(concat(config.cssOutputFile))
        .pipe(gulp.dest(config.cssOutputDist))
        .pipe(rename(config.cssOutputFileMin))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.cssOutputDist));
});
