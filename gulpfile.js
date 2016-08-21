  
var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('build', function (cb) {
  exec('gitbook build', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('deploy', function (cb) {
  exec('git subtree push --prefix _book origin master', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});