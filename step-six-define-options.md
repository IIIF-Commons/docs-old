# Step Six: Define Options

Now we want to be able to create a drawing canvas, with the option to overlay it onto an image or add it as an OpenSeaDragon overlay. Because the setup and the css is slightly different for these scenarios, let's go ahead and add an optional parameter to set the overlay type.  In the `ISvgDrawComponentOptions.ts` file, let's add an `overlayType` parameter:

```js
namespace IIIFComponents{
 export interface ISvgDrawComponentOptions extends _Components.IBaseComponentOptions {
   overlayType?: string; // 'img' or 'osd'
 }
}
```

If no overlay is specified, it will default to a plain old canvas that we can draw on.  We also need to add an `ISvgDrawComponent.ts` interface... 

