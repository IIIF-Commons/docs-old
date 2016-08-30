# Component Tutorial

Let's create a component called SvgDraw that will allow us to create SVG shapes that can be used as overlays in OpenSeadragon \(or elsewhere\).

## Step One: Use component-boilerplate as a template

We are going to replicate the `component-boilerplate`.  The easiest way to do this is to simply clone component-boilerplate, delete the .git directory, then git init, git add ., and git commit.  After doing this, I followed [these instructions for creating my own remote GitHub repo for the component from the command line](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/).  I run:

```
npm install
gulp
gulp examples
```

Then, I point my browser to [http:\/\/localhost:8080](http://localhost:8080) and should get the javascript alert to ensure that the example demo works.  Finally, I replace all instances of "ExampleComponent" with the name of my new component called "SvgDraw".  Make sure the example demo still works after I've made those changes.

## Step Two: Adding Custom Styles and Images

Since I know that I'm going to want to have some custom CSS and icons for my component, the next thing I do is create the following two  directories in the `src` directory: `css` and `img` .  I create a simple `styles.less` file in `css` that looks like this:

```css
@img-path: "../img/" 

.svg-draw-component{
  //someplace to put component-specific css (perhaps put the viewdir logo here?)
}
```

We can leave the img directory blank for now.

In order for the less file to be compiled into css, we need to add a npm module called `gulp-less` and we also need to add gulp tasks to ensure the resulting files are copied into the appropriate location in `examples` when we run `gulp build`.  To add the gulp-less npm module to the package.json devDependencies, type the following npm command:

```
npm install gulp-less --save-dev
```

Now, we will create our gulp tasks.  I add the following lines to the `tasks/copy.js`:

```js
gulp.task('copy:css', function() {
     return gulp.src([path.join(config.dist, config.cssOut)]).pipe(gulp.dest(config.examplesCssDir)); 
});

gulp.task('copy:img', function() {
    return gulp.src(config.imgSrc).pipe(gulp.dest(config.examplesImgDir));
});
```

I also add a file called less.js to the tasks directory.  It looks like this

```js
var c = require('../gulpfile.config');
var config = new c();
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var rename = require('gulp-rename');

gulp.task('less', function () {
 return gulp.src(config.cssSrc) 
    .pipe(less({ 
        paths: [ path.join(__dirname, 'less', 'includes') ]    
    })) 
    .pipe(rename(config.cssOut)) 
    .pipe(gulp.dest(config.dist));
 });
```

Finally, we add these tasks to the `gulpfile.js` .  Add 'less' to the default runSequence here:

```js
runSequence('clean:dist', 'build', 'browserify', 'less', 'minify', ...
```

And add our `copy:css` and `copy:img` tasks to the 'sync' task:

```js
gulp.task('sync', ['copy:bundle', 'copy:css', 'copy:img', 'copy:typings']);
```

