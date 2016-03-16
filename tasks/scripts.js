(() => {
    module.exports = ($) => {
        'use strict'

        $.gulp.task('scripts', () =>
            $.gulp
            .src([
                `${$.dev.dir}/**/*.js`,
                `!${$.dev.dir}/**/_*.js`,
                `!${$.dev.dir}/**/_**/**/*.js`
            ])
            .pipe($.babel({
                presets: ['es2015']
            }))
            .pipe($.wrap(
                `(function () {\n
                    <%= contents %>\n
                })();`
            ))
            .pipe($.ngAnnotate())
            .pipe($.gulp.dest($.deploy.dir))
        )
    }
})()