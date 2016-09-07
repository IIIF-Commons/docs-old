# Events

Often the state of one component will need to change, based on what is happening in other components.  Events are the way components communicate with one another.  In order for Component B to know what's going on with Component A, it listens for events.  However, Component A does not necessarily know how or what to listen to from Component B.  Therefore, every unique combination of components will need its own custom pubsub library that can be used to publish events and register subscribers.  The [BaseCommands definition for the Universal Viewer](https://github.com/UniversalViewer/universalviewer/blob/dev/src/modules/uv-shared-module/BaseCommands.ts) defines all the commands and their associated event identifiers so UV components can listen for these events.



