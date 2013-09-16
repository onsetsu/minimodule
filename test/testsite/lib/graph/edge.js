mini.Module(
	"graph/edge"
).requires(
	"graph/node"
).defines(function(node) {
	console.log("loaded graph/edge with", node);
	return "edge";
});

console.log("graph/edge file");