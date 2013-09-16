mini.Module(
	"graph/edge"
).requires(
	"graph/node"
).defines(function(node) {
	console.log("loaded graph/edge with", node);
});

console.log("graph/edge file");