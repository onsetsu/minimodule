mini.Module(
	"traverse"
).requires(
	"graph/graph",
	"functor"
).defines(function(graph, functor) {
	console.log("loaded traverse with", graph, functor);
	return [graph, functor];
});

console.log("traverse file");