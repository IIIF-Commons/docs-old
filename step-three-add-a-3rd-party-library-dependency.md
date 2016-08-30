# Step Three: Add a Dependency

You'll often want to lean on other libraries like jQuery or lodash to make your life easier.  Here we will improve our developer experience by adding a dependency on the paper.js SVG library.

Let's start by adding paper.js as a dependency:

`npm install paper --save`

This will add it to our package.json file, so it will be included whenever we install the component.

Next, we need to update our gulpfile.config.js and add the dependency so it gets bundled into our component

```js
 // libs that MUST be included in a consuming app for this component to work

 this.deps = [
 'node_modules/base-component/dist/base-component.bundle.js',
 'node_modules/paper/dist/paper-full.min.js'
 ];
```

