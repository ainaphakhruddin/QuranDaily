// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
console.log("This is child widow friends.js");
 $.friends.open();

function swipeRight(f){
	console.log("friends.js: check swipeRight stuff: "+JSON.stringify(f));
	if (f.direction =="right") {
		var direction = f.direction;
		alert("direction is: "+direction);
		var indexController = Alloy.createController('index').getView();
    	$.friends.open(indexController, 'fast');
	}
	
};