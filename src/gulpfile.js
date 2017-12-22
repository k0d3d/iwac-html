let gulp = require('gulp')
var concat = require('gulp-concat');
 
gulp.task('pack-js', function () {	
	return gulp.src(['assets/js/vendor/*.js', 'assets/js/main.js', 'assets/js/module*.js'])
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('../dist/js'));
});
 
gulp.task('pack-css', function () {	
	return gulp.src(['assets/css/main.css', 'assets/css/custom.css'])
		.pipe(concat('stylesheet.css'))
		.pipe(gulp.dest('../dist/css'));
});
 
gulp.task('default', ['pack-js', 'pack-css']);