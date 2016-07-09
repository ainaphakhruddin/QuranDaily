
//alert($.label.text);
var myGoal = Alloy.Collections.goal;

Alloy.Collections.goal.fetch();
console.log("index.js:: JSON.stringify(myGoal): initial "+JSON.stringify(myGoal));

var goal = Alloy.createModel('goal', {
	start: 'page 1',
	end: 'page 2'
});
	
/*myGoal.add(goal);
goal.save();
*/

console.log("index.js:: JSON.stringify(myGoal): initial "+JSON.stringify(myGoal));

/*

function AinaTransformfunction(model) {
	console.log("index.js:: JSON.stringify(model): initial "+JSON.stringify(model));
	var transform = model.toJSON();
	//transform.datehaha = transform.date;
	return transform;
};
,

if(OS_MOBILEWEB){
	var swipeUp = Ti.UI.createLabel({
		text:"\uf104 Back",
		color: "#C41230",
		font:{
			fontFamily:"icomoon",
			fontSize:20
		}
	});
	swipeUp.addEventListener("swipeUp", function(u){
		Alloy.Globals.Navigator.navGroup.open($.progress);
	});
}
*/

$.mainwindow.addEventListener("close", function(){
	Alloy.Collections.goal.deleteAll();
});

$.mainwindow.open();
//$.index.open();
