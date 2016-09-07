# Mixins

Earlier we added some Paper.js code to our `example/index.html` page, but we really would like that functionality to live in our component.  In order to access the Paper.js functionality we need to appy a mixin.  Unfortunately, as it turns out, Paper.js uses an architecture that makes everything a global object.  This conflicts with the scoped nature of web components and it will not be possible to use Paper.js as our drawing library.  Luckily, Ed Silverton has created a library called Etch, turned it into a component, and provided us with an example.  

Debugging

