TestCase("testMiniModule", {
	setUp: function() 
	{		
	},
	
	tearDown: function()
	{
	},
	
	// desired API exists.
	"testMiniModuleAPI": function()
	{
		assertNotUndefined(mini.Module);
		
		mini.Module(
		).requires(
		).defines();
	}

});
