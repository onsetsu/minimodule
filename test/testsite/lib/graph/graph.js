mini.Module(
	"graph/graph"
).requires(
	"graph/node",
	"graph/edge"
).defines(function(node, edge) {
	console.log("loaded graph/graph with", node, edge);
	return [node, edge];
});

console.log("graph/graph file");