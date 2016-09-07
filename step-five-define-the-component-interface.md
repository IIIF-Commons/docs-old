# Binding to the DOM via _Element_

The base-component provides an "element" option that allows us to bind our component to the DOM.

Let's start by setting a default element that our component will bind to.  Since this is about drawing, our component will be adding a canvas to the document.  It would be convenient for us to obtain the dimensions of the canvas from the default element, so let's bind it to a &lt;div&gt;, allowing us to work easily with a simple canvas, a basic image overlay, or OpenSeadragon overlay canvases.

Let's go ahead and add `<div id="svgdraw"></div>` to the example document and make sure we are binding the component the the element \(specified in base-component\) when we create it like this:

```
var svgdraw;
svgdraw = new IIIFComponents.SvgDrawComponent({
 element: "#svgdraw"
});
```

We are going to then add the canvas in the component.  Since we don't want any external scripts to be able to manipulate the canvas, let's add it as a private member.  We can also explicitly make the options public even though \`public\` is the Typescript default.

```
public options: ISvgDrawComponentOptions;
private _$canvas: JQuery;
```

Then, in the \_init method we can replace the `this._$element.append("I am an example component");` line with this:

```
this._$canvas = $('<canvas id="paper"></canvas>'); 
this._$element.append(this._$canvas);
```

