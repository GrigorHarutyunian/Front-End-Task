const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// SCSS Task: Compile SCSS to CSS
function styles() {
  return gulp
    .src("src/scss/**/*.scss") // Source SCSS files
    .pipe(sass().on("error", sass.logError)) // Compile SCSS
    .pipe(gulp.dest("dist/css")); // Output CSS file
}

// Watch Task: Watch SCSS changes
function watchFiles() {
  gulp.watch("src/scss/**/*.scss", styles);
}

// Default Task
exports.default = gulp.series(styles, watchFiles);
