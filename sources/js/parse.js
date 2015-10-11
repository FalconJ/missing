Parse.initialize("R6bSzRV4B4p0PPOonPBfJMYOmVzc30ekeJhyQUEv", "amWdFqFhwmP7jLGPh0zCI2ozm5pjVdoqz9wiTGeL");

function registerUser(fbinfo){

    var currentUser = Parse.User.current();
    
    if (currentUser) {
        Parse.User.logOut();
    } 

	var user = new Parse.User();

	user.set("username", fbinfo[1]);
	user.set("password", fbinfo[0]);
	user.set("email", fbinfo[2]);
	user.set("sex", fbinfo[5]);
	user.set("email", fbinfo[6]);

	user.signUp(null, {

		success: function(user){
			console.log("Welcome buddy! :3");
			window.location = "login.html";
			return true;
		},
		error: function(user, error){
			return false;			
		}
	});

}

function logUser(fbinfo){

   var currentUser = Parse.User.current();
    
    if (currentUser) {
        Parse.User.logOut();
    } 

	Parse.User.logIn(fbinfo[1], fbinfo[0], {
		success: function(){
			console.log("Welcome back bro");
	    	window.location = "login.html";
		},
		error: function(user, error){
			alert("Error: " + error.message);
		}
	});
}

function logOut(){
   var currentUser = Parse.User.current();
    
    if (currentUser) {
        Parse.User.logOut();
    }

    window.location = "index.html"
}
