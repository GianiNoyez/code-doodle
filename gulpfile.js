var gulp = require("gulp");
var ts = require("gulp-typescript");

var config = ts.createProject('tsconfig.json');

gulp.task("default", function () {
    
    gulp.src(["**/*.ts", "!node_modules/**/*"]).pipe(ts({
        noImplicitAny: true
    })).js.pipe(gulp.dest("build/"));

    gulp.src(['views/**/*']).pipe(gulp.dest('build/views'));
    gulp.src(['public/**/*']).pipe(gulp.dest('build/public'));
});
