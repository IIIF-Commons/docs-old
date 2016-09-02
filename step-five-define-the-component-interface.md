# Step Five: A Closer look at the Boilerplate Code

Now that we're all set up and our dependencies are in order, we can begin work on the component itself.

Let's start by setting a default element that our component will bind to.  Since this is about drawing, our component will be adding a canvas to the document.  It would be convenient for us to obtain the dimensions of the canvas from the default element, so let's bind it to a &lt;div&gt;, allowing us to work easily with a simple canvas, a basic image overlay, or OpenSeadragon overlay canvases.

Let's go ahead and add `<div id="svgdraw"></div>` to the example document and make sure we are binding the component the the element \(specified in base-component\) when we create it like this:

```
svgdraw = new IIIFComponents.SvgDrawComponent({
 element: "#svgdraw"
});
```

We are going to then add the canvas in the component.  Since we don't want any external scripts to be able to manipulate the canvas, let's add it as a private member.  We can also explicitly make the options public even though \`public\` is the Typescript default.

```
public options: ISvgDrawComponentOptions;
private _$canvas: JQuery;
```

The first thing I want to do is get rid of that javascript alert that pops up when we reload the page.  Conveniently, we can simply change this behavior to set up our first drawing tool that will allow us to create a simple path on the canvas.

