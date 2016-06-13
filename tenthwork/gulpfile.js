/*var gulp = require('gulp');

gulp.task('default', function() {
  console.log("ok");
});*/

var gulp=require("gulp");
var uglify=require("gulp-uglify");
var concat=require("gulp-concat");

gulp.task("default",function(){
	gulp.src("js/*.js")
	.pipe(uglify())
	.pipe(concat("all.main.js"))
	.pipe(gulp.dest("build"));
	});