// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
 console.log("This is child widow settings.js");
 $.settings.open();

function swipeLeft(s){
	console.log("setting.js: check swipeLeft stuff: "+JSON.stringify(s));
	if (s.direction =="left") {
		var direction = s.direction;
		alert("direction is: "+direction);
		var indexController = Alloy.createController('index').getView();
    	$.settings.open(indexController, 'fast');
	}
	
};

