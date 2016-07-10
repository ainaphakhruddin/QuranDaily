// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
console.log("This is child widow progress.js");
 $.progress.open();
 
function swipeDown(p){
		console.log("index.js: check swipeDown stuff: "+JSON.stringify(p));
		if (p.direction == "down") {
			var direction = p.direction;
			alert("direction is: "+direction);
			//...
			var progressController = Alloy.createController('index').getView();
			$.progress.open(indexController);
		}
};
