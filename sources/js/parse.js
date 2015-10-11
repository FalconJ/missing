Parse.initialize("R6bSzRV4B4p0PPOonPBfJMYOmVzc30ekeJhyQUEv", "amWdFqFhwmP7jLGPh0zCI2ozm5pjVdoqz9wiTGeL");

function registerUser(fbinfo){

    var currentUser = Parse.User.current();
    
    if (currentUser) {
        Parse.User.logOut();
    } 

	var user = new Parse.User();

	user.set("password", fbinfo[0]);
	user.set("name", fbinfo[1]);
	user.set("username", fbinfo[2]);
	user.set("email", fbinfo[2]);
	user.set("sex", fbinfo[5]);
	user.set("photo", fbinfo[6]);

	user.signUp(null, {

		success: function(user){
			console.log("Welcome buddy! :3");
			window.location = "login.html";
		},
		error: function(error){			
		}
	});

}

function logUser(fbinfo){

   var currentUser = Parse.User.current();
    
    if (currentUser) {
        Parse.User.logOut();
    } 

	Parse.User.logIn(fbinfo[2], fbinfo[0], {
		success: function(){
			console.log("Welcome back bro");
	    	window.location = "login.html";
		},
		error: function(user, error){
			//alert("Error: " + error.message);
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

function registerForm(){
	var name = document.getElementById('name').value + " " + document.getElementById('lastName').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var sex = document.getElementById('sex').value;

	if (currentUser) {
        Parse.User.logOut();
    } 

	var user = new Parse.User();

	user.set("password", password);
	user.set("name", name);
	user.set("username", email);
	user.set("email", email);
	user.set("sex", sex);
	user.set("photo", 'default.jpg');

	user.signUp(null, {

		success: function(user){
			console.log("Welcome buddy! :3");
			window.location = "login.html";
		},
		error: function(error){			
		}
	});
}

function logInForm(){
	var email = document.getElementById('iEmail').value;
	var password = document.getElementById('iPassword').value;

    var currentUser = Parse.User.current();
    
    if (currentUser) {
        Parse.User.logOut();
    } 

	Parse.User.logIn(email, password, {
		success: function(){
			console.log("Welcome back bro");
	    	window.location = "login.html";
		},
		error: function(user, error){
			//alert("Error: " + error.message);
		}
	});

}
