Parse.initialize("R6bSzRV4B4p0PPOonPBfJMYOmVzc30ekeJhyQUEv", "amWdFqFhwmP7jLGPh0zCI2ozm5pjVdoqz9wiTGeL");

function registerUser(fbinfo){

	var user = new Parse.User();

	user.set("username", fbinfo[1]);
	user.set("password", fbinfo[0]);
	user.set("email", "test@email.com");
	user.set("sex", fbinfo[4]);
	user.set("photo", fbinfo[5]);

	user.SignUp(null, {
		success: function(user){
			console.log("Welcome buddy! :3");
		},
		error: function(user){
			alert("Error: " + error.code + " " + error.message);
		}
	});

}


0: "1017841588246848"
1: "Jorge Falcón"
2: "Jorge"
3: "Falcón"
4: "male"
5: "https://graph.facebook.com/1017841588246848/picture?type=large"