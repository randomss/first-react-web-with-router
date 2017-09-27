# How To Setup: (bootstraps a starter page at localhost)

## Install Node and NPM:

```
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## Install React, create first app, and start
```
sudo npm install -g create-react-app
create-react-app my-app
cd my-app
npm start
```

## Install gulp and related files 
```
sudo npm install --global gulp-cli
sudo npm i gulp gulp-sass gulp-clean-css gulp-uglify gulp-rename gulp-changed --save-dev
```
Create a gulpfile.js and put following code:
```
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglifyCSS = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');


var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';

// Compile SCSS
gulp.task('compile_scss', function() {
  gulp.src(SCSS_SRC)
  .pipe(sass().on('error', sass.logError))
  .pipe(minifyCSS())
  .pipe(rename({suffix:'.min'}))
  .pipe(changed(SCSS_DEST))
  .pipe(gulp.dest(SCSS_DEST));

});

gulp.task('watch_scss', function(){
  gulp.watch(SCSS_SRC, ['compile_scss']);
});

//gulp.task('default', ['watch_scss']);

gulp.task('default', function() {
  // place code for your default task here
  gulp.watch(SCSS_SRC, ['compile_scss']);
});
```

Above code assumes following structure for css and scss:

![Alt text](/folder-structure.png?raw=true "Folder Structure for css and sass")


For seeing the gulp in action, just go to terminal and type gulp. You can test live updating of scss to css and minification etc.

## For adding routes via React
```
react-router-dom
```

See the code in App.js and header.js to see how to implement it.
