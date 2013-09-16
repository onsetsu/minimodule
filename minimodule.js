(function(window) {
	window.mini = window.mini || {};
	
	var currentModule = "";
	
	// load a single script file
	window.mini.pathPrefix = "";
	var loadScript = function() {};
	window.mini.loadscript = loadScript;
	
	var Module = function(name) {
		this.name = name;
	};

	window.mini.Module = function(name) {
		currentModule = name;
		return this;
	};
	
	window.mini.requires = function() {
		return this;
	};
	
	window.mini.run = function() {};

})(window);
