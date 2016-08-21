#manifesto

https://github.com/viewdir/manifesto 

Manifesto is an isomorphic node.js library designed to make working with IIIF Presentation API manifests easy on the client and server side. The current feature set includes:

- Loading and parsing manifests into a convenient object model
- IIIF Auth API implementation
- ‘IxIF’ support for non image-based resources (not currently a recommended specification)
- Tree hierarchy generation from ranges
- Localisation support
- Lazy loading of sub manifests/collections

Possible future features to be added by community:

- Setter functions to allow building manifests programmatically
- Serialisation of the object model back to JSON-LD

Manifesto is written in TypeScript which allows static typing. This makes it easy to catch coding errors at compile time and makes the project very resilient to refactors. There is also a well maintained mocha test suite.

[Documentation](http://viewdir.github.io/manifesto-docs/)

[Tutorial](http://blog.edsilv.com/manifesto/)

#manifold

https://github.com/viewdir/manifold 

Manifold is a TypeScript library that wraps Manifesto to provide the following IIIF viewer-specific feature set:

- Simple state management
- Multi-selection state management
- Tree sorting by date
- Numerous convenient shortcut utilities 

#base-component

https://github.com/viewdir/base-component 

base-component is designed to underpin any components built to these proposed best practices: https://gist.github.com/edsilv/83221d47fc262230d04fbcdc32dc1d98 

It is also written in TypeScript, but does not require the use of TypeScript by ancestor libraries. It provides a minimal set of bootstrapping functions and a useful `applyMixins` function to allow dynamic mixing-in of other libraries. The TinyEmitter library is mixed-in using this method to provide event publishing.

#component-boilerplate

https://github.com/viewdir/component-boilerplate

A reference implementation of base-component.

#iiif-tree-component

https://github.com/viewdir/iiif-tree-component

iiif-tree-component ([example](http://viewdir.github.io/iiif-tree-component/examples/)) was the first component to be written for the [Universal Viewer](http://universalviewer.io/examples) and comprises the tree menu functionality inside the “index” tab in the left-hand-side panel. 

This uses Manifold’s support for date sorting and lazy loading to populate the menu.