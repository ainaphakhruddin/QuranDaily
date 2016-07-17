// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};


// added during app creation. this will automatically login to
// ACS for your application and then fire an event (see below)
// when connected or errored. if you do not use ACS in your
// application as a client, you should remove this block
(function(){
var ACS = require('ti.cloud'),
    env = Ti.App.deployType.toLowerCase() === 'production' ? 'production' : 'development',
    username = Ti.App.Properties.getString('acs-username-'+env),
    password = Ti.App.Properties.getString('acs-password-'+env);

// if not configured, just return
if (!env || !username || !password) { return; }
/**
 * Appcelerator Cloud (ACS) Admin User Login Logic
 *
 * fires login.success with the user as argument on success
 * fires login.failed with the result as argument on error
 */
ACS.Users.login({
	login:username,
	password:password,
}, function(result){
	if (env==='development') {
		Ti.API.info('ACS Login Results for environment `'+env+'`:');
		Ti.API.info(result);
	}
	if (result && result.success && result.users && result.users.length){
		Ti.App.fireEvent('login.success',result.users[0],env);
	} else {
		Ti.App.fireEvent('login.failed',result,env);
	}
});

})();
//Global Quran API c024218be9ce6137e0b3aec6189fc788
Alloy.Globals.getMaster = function() {
	var url="http://api.globalquran.com/page/601/quran-simple?key=c024218be9ce6137e0b3aec6189fc788";
	var xhr = Ti.Network.createHTTPClient({
		    onload: function(ee) {
			    	json = JSON.parse(this.responseText);
			    	console.log("Alloy.Globals.updateType : this.responseText: "+this.responseText);
			    	console.log("Alloy.Globals.updateType : json: "+json);
			    	var out = '{ "poi" : ['+"\n";
			    	/*
			    	for (var i=0; i < json.feed.entry.length; i++) {
			    		var col1 = json.feed.entry[i].title.$t.trim();
						var col2= json.feed.entry[i].content.$t.split(',')[0].split(':')[1].trim() || "none";
						if(col1 && col2){
							eval("Titanium.App.Properties.setString(\""+col1+"\",col2)");
							if(col1=="freeuser"){Titanium.App.Properties.setString("freeuser",col2); };
							if(col1=="paiduser"){Titanium.App.Properties.setString("paiduser",col2);};
							if(col1=="paidbasic"){Titanium.App.Properties.setString("paidbasic",col2);};
							if(col1=="paidpremium"){Titanium.App.Properties.setString("paidpremium",col2);};
							if(col1=="paidunlimited"){Titanium.App.Properties.setString("paidunlimited",col2);};
							console.log("alloy::getMaster:: Titanium.App.Properties.getString("+col1+"): "+eval("Titanium.App.Properties.getString(col1)"));
							//console.log("alloy::getMaster:: Titanium.App.Properties.getString(publicrepo): "+Titanium.App.Properties.getString("publicrepo"));						
							}						
						if ( i == (json.feed.entry.length - 1)) {
							out += '{ "col1" : "'+col1+'" , "col2" : "'+col2+'" }]}'+"\n";
						} else {
							out += '{ "col1" : "'+col1+'" , "col2" : "'+col2+'" },'+"\n";
						}
			    	}*/
//					Alloy.Globals.writeFile(out,"master.json");
//					var json = out;		    
			}	
		});	
		console.log("alloy::getMaster:url :"+url);		
		xhr.open("GET", url);
		xhr.send();
};

