var gulp = require('gulp')
	, exec = require('child_process').exec;

gulp.task('toc', function(cb) {
	exec('doctoc .', cb);
});