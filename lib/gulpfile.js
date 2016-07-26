var gulp = require('gulp'),
    del = require('del'),
    shell = require('gulp-shell'),
    sass = require("gulp-sass"),
    runSeq = require('run-sequence');

gulp.task('dist:clean', () =>{
    return del('dist/**/*', {force:true});
});

var SOURCE_DIR = "plugin";

gulp.task('plugin:copy', () => {
  var fssetup = [
    {
      from: [
        './' + SOURCE_DIR + '/**/*',
        '!./' + SOURCE_DIR + '/assets/scss/**/*',
        '!./' + SOURCE_DIR + '/**/*.ts'
      ],
      to: '../dist'
    }
  ];

  return fssetup.map((setup) => {
    return gulp.src(setup.from).pipe(gulp.dest(setup.to));
  });
});

gulp.task('plugin:transpile:sass', () => {
     gulp.src('./' + SOURCE_DIR + '/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('../dist/plugin'));
});

gulp.task("sass:watch", () => {
   gulp.watch('./' + SOURCE_DIR + '/**/*.scss',['plugin:transpile:sass']);
});

gulp.task('plugin:transpile:ts', shell.task(['tsc']));

gulp.task('plugin:build', (done) => {
    return runSeq('dist:clean', 'plugin:copy', 'plugin:transpile:sass', 'plugin:transpile:ts', done);
});

gulp.task('default', ['plugin:build']);
