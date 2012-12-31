requirejs.config({
	baseUrl : "scripts",
	paths : {
		app : "app",
		lib : "lib"
	},
	name: "main",
     out: "built.js"
});
require(["lib/jquery-1.8.3.min","app/A","app/B"],function(){
	console.log("Loaded all the JS files");
});