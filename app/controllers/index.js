
//alert($.label.text);
var myGoal = Alloy.Collections.goal;

Alloy.Collections.goal.fetch();
console.log("index.js:: JSON.stringify(myGoal): initial "+JSON.stringify(myGoal));

var mainWindow = Titanium.UI.iOS.createNavigationWindow({
	win: 'goal'
});

var goal = Alloy.createModel('goal', {
	start: 'page 1',
	end: 'page 2'
});
	
myGoal.add(goal);
goal.save();


console.log("index.js:: JSON.stringify(myGoal): initial "+JSON.stringify(myGoal));

/*

function AinaTransformfunction(model) {
	console.log("index.js:: JSON.stringify(model): initial "+JSON.stringify(model));
	var transform = model.toJSON();
	//transform.datehaha = transform.date;
	return transform;
};
,
*/
/*Below is the function to clean up the repetitiong of page 1 and page 2 {start} and {end} views 
function doClean(e){
	console.log("index.js:: JSON.stringify(e): " + JSON.stringify(e));
	Alloy.Collections.goal.deleteAll();
}; 
*/



/* Below is the function used to create swipe functions to enter new windows*/
function swipeAnywhere(e){
if (e.direction =="right") {var settingsController = Alloy.createController('settings').getView();
    		$.navWindow.open(settingsController);}
else if (e.direction == "up") {var progressController = Alloy.createController('progress').getView();
			$.navWindow.open(progressController);}
else if (e.direction =='left') {var friendsController = Alloy.createController('friends').getView();
		$.navWindow.open(friendsController);}
};

function swipeUp(e){
		console.log("index.js: check swipeUp stuff: "+JSON.stringify(e));
		if (e.direction == "up") {
			var direction = e.direction;
			alert("direction is: "+direction);
			//...
			var progressController = Alloy.createController('progress').getView();
			$.navWindow.open(progressController);
		}
		
		
};
function swipeRight(e){
	console.log("index.js: check swipeRight stuff: "+JSON.stringify(e));
		if (e.direction == "right") {
			var direction = e.direction;
			alert("direction is: "+direction);
			//...
			var settingsController = Alloy.createController('settings').getView();
    		$.navWindow.open(settingsController);
		}
};


function swipeLeft(e){
	console.log("index.js: check swipeLeft stuff:" +JSON.stringify(e));
	if (e.direction == "left") {
		var direction = e.direction;
		alert("direction is: "+direction);
		//...
		var friendsController = Alloy.createController('friends').getView();
		$.navWindow.open(friendsController);
	}
};



/*
$.navWindow.addEventListener("close", function(){
	Alloy.Collections.goal.deleteAll();
});*/

$.navWindow.open();


//$.index.open();
