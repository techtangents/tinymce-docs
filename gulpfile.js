'use strict';

var gulp = require('gulp'),
    cheerio = require('gulp-cheerio');

gulp.task('default', function () {
    return gulp
        .src(['_site/get-started/first-steps/index.html'])
        .pipe(cheerio(function ($, file) {
            ['.menu', '.mobile-menu', '.main .side-nav', '.contribute', '.top-bar', '.next-step', '.feedback'].forEach(function (e) {
                $(e).remove();
            });
            $('.main').css('padding-top', 0);
            $('.main .heading').css({
                'margin-left': 0,
                'width': 'auto'
            });
            $('.main .content').css({
                'margin-left': 0,
                'width': 'auto'
            });
        }))
        .pipe(gulp.dest('cdn/'));
});