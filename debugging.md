# Debugging

Debugging JavaScript is not always straightforward.  Fortunately, there are a few things you can do to make your life easier and understand the flow and functioning of a program.  We can start by using some of the developer tools in Google Chrome, although similar tools exist for most other browsers.

## Generating Non-bundled Output files

Minified JavaScript helps us to reduce the size of our code in production, but it's not very helpful in a development environment when we want to set break points on specific lines and inspect the internal workings of our programs.  The first step we will want to take is to move both minified and formatted versions into the examples directory, and while coding, use the formatted version in our demo.

