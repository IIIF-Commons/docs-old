##Step One: Use component-boilerplate as a template

We are going to replicate the `component-boilerplate`. The easiest way to do this is to simply clone component-boilerplate, delete the .git directory, then git init, git add ., and git commit. After doing this, I followed [these instructions for creating my own remote GitHub repo for the component from the command line](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/). I run:

```
npm install
gulp
gulp examples
```

Then, I point my browser to [http:\/\/localhost:8080](http://localhost:8080) and should get the javascript alert to ensure that the example demo works. Finally, I replace all instances of "ExampleComponent" with the name of my new component called "SvgDraw". Make sure the example demo still works after I've made those changes.
