minimodule
==========

A tiny JavaScript asynchronous module library.

### USAGE ###

Include the file `minimodule.js` into your html.
Optionally your can change the path your modules are referenced from.
The default path is the path to your html file.

```JavaScript
<script type="text/javascript" src="path/to/minimodule.js"></script>
<script type="text/javascript">
	mini.pathPrefix = "lib/"; // Change path to "lib/"
</script>
```

In each of your files you can now define a module.

```JavaScript
mini.Module(
	"graph/graph" // The modules name/path
)
.requires(
	"graph/node", // required modules
	"graph/edge"
)
.defines(function(Node, Edge) { // References to the required modules. No global namespace pollution.

  // Define your module
  var Graph = function() {
    this.root = new Node();
  };
  
	return Graph; // Return the module
});
```

If `graph.js` is included, the dependencies are loaded asynchronously. Once all dependencies are solved the defined function is called.

### MIT License ###

Copyright (c) 2013 Stefan Lehmann (Onsetsu)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
