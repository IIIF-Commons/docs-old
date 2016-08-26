
## Philosophy
Interoperable content is _the_ central goal of the IIIF project.  ViewDir carries the dream of interoperability to the development of software itself.  For software to be interoperable, it must be designed to not only implement the content and service specifications provided by IIIF, but also to adhere to principles that allow for decentralized but coordinated development.  The Unix philosophy is an example of a composable approach to software design, where 1) each program does one thing well and 2) all programs are designed to work together.  We don’t often think of client-side software as composable systems, but we believe _composable_ UI components will save thousands of hours of developer time and exponentially expand what is possible when it comes to the creation of client-side viewers and editors.

Most often, web UI libraries fall under one of two categories. They may be part of a “framework”, or a grouping of UI components that share an appearance, a similar API, or are otherwise cohesive. Another category is usually the standalone library. Components that are part of a framework are usually hard to integrate with anything that’s not part of said framework, resulting in “vendor” lock-in. Components that aren’t part of a framework tend to be easier to integrate with other things, but most often they’re not designed to that effect. [1] Composability is a much better alternative, and our approach is similar to that taken by Google (web components) and Facebook (React) without tying ourselves into any particular framework.

Composability is good because:

* no lock-in, swap them out if a better one comes along
* reuse promotes code quality due to many/diverse users
* saves money because things aren't getting developed twice
* code stays small and manageable - easy to on-board
* use whatever framework you like, components are agnostic
* less risk when "buying in" to a particular software stack
* consistent design, adherence to an agreed pattern rather than some unsustainable monolith

[1] Bevacqua, N. (2015, July). Composable UI. Retrieved July 28, 2016, from https://ponyfoo.com/articles/composable-ui
