Parse.initialize("R6bSzRV4B4p0PPOonPBfJMYOmVzc30ekeJhyQUEv", "amWdFqFhwmP7jLGPh0zCI2ozm5pjVdoqz9wiTGeL");

function registerUser(fbinfo){

    var currentUser = Parse.User.current();
    
    if (currentUser) {
        Parse.User.logOut();
    } 

	var user = new Parse.User();

	console.log(fbinfo);

	user.set("password", fbinfo[0]);
	user.set("name", fbinfo[1]);
	user.set("username", fbinfo[2]);
	user.set("email", fbinfo[2]);
	user.set("sex", fbinfo[5]);
	user.set("photo", fbinfo[6]);

	user.signUp(null, {

		success: function(user){
			console.log("Welcome buddy! :3");
			window.location = "home.html";
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
	    	window.location = "home.html";
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
	var fbinfo = new Array();
	var name = document.getElementById('name').value + " " + document.getElementById('lastName').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var sex = document.getElementById('sex').value;

	console.log(name + " " + email + " " + password + " " + sex);

	fbinfo.push(password);
	fbinfo.push(name);
	fbinfo.push(email);
	fbinfo.push(name);
	fbinfo.push(name);
	fbinfo.push(sex);
	fbinfo.push("default.jpg")


	registerUser(fbinfo);
}

function logInForm(){
	var email = document.getElementById('iEmail').value;
	var password = document.getElementById('iPassword').value;

	console.log(email + " " + password);

	var fbinfo = new Array();

	fbinfo.push(password);
	fbinfo.push("name leet");
	fbinfo.push(email);
	fbinfo.push("name");
	fbinfo.push("leet");
	fbinfo.push("male");
	fbinfo.push("default.jpg");

	logUser(fbinfo);
}
