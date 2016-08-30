# Step Four:  Add a Demo Dependency

Of course, no component repository is complete without a demo.  We often want to show how our component will coexist and interact with other libraries and components.  In this case, I would like to demonstrate how one can use the library to create overlays in OpenSeadragon.

The first thing we want to do is add an example dependency in `gulpfile.config.js` just underneath where we added our required dependencies \(i.e. base-component and paper.js\).  We need the entire directory for this one, not just the minified file, so we will create a path to the whole build directory:

```js
// libs that MAY be included in a consuming app but are used here for examples purposes 
this.examplesDeps = [
     'node_modules/openseadragon/build/**/*'
];
```

Then we will add the following line to our index.html head:

```
<script src="js/openseadragon/openseadragon.min.js"></script>
```

Now, we just need to add some markup to draw OSD:

```
<style> 
    .openseadragon { 
        width: 800px; height: 600px; border: 1px solid black; color: #333; background-color: black; 
    } </style>
```
