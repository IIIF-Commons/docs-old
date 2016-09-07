# Events

Events are the way components communicate with one another.  In order for Component B to know what's going on with Component A, it listens for events.  In order for Component A to know what's happening on the DOM, it has to listen for events as well.



In order for a component to pick up events from another component, it needs to know what to look for.  In the svg-draw-component example and event should be emitted when a shape is selected \(or completed\) so that another component can listen for that and do something.  For example, an annotation authoring component should listen for events that announce the creation of an object that an annotation can be attached to.  How does the annotation authoring component know what to listen for?

