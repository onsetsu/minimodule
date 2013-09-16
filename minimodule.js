(function(window) {
	window.mini = window.mini || {};
	
	// load a single script file
	window.mini.pathPrefix = "";
	var loadScript = function (name) {
		var jsName = window.mini.pathPrefix + name + ".js";
		try {
			console.log("include", name);
			// inserting via DOM fails in Safari 2.0, so brute force approach
			document.write('<script type="text/javascript" src="' + jsName + '"><\/script>');
		} catch (e) {
			// for xhtml+xml served content, fall back to DOM methods
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = jsName;
			document.getElementsByTagName('head')[0].appendChild(script);
		};
	};
	
	var loadModuleIfNeeded = function(module) {
		if(!module._inLoadQueue) {
			module._inLoadQueue = true;
			loadScript(module.name);
		}
	};
	
	var modules = {};
	
	// work with graph of modules
	var Module = function(name) {
		console.log("new Module", name);
		modules[name] = this;
		this.name = name;
		
		this._inLoadQueue = false;
		this._fileLoaded = false;
		this._definedRequiredModules = false;
		this._definedBody = false;
		this._runned = false;
	};
	
	Module.prototype.requires = function() {
		this.requiredModuleNames = arguments;
		for(var index in this.requiredModuleNames) {
			var requiredModuleName = this.requiredModuleNames[index];
			var requiredModule = getOrCreateModule(requiredModuleName);
			loadModuleIfNeeded(requiredModule);
		};
		
		this._definedRequiredModules = true;

		return this;
	};
	
	Module.prototype.defines = function(body) {
		this.body = body;
		this._definedBody = true;
	};

	Module.prototype.runWithDependencies = function() {
		
	};
	
	var getOrCreateModule = function(name) {
		return modules[name] || new Module(name);
	};
	
	window.mini.Module = function(name) {
		var module = getOrCreateModule(name);
		module._fileLoaded = true;
		return module;
	};
	
})(window);
