  function getUserData(){
      FB.api('/me', {fields: 'id,name,email,first_name,last_name,gender'}, function(response) {

      //Array that stores users info
      fbinfo = new Array();

      for(var property in response){
        if(response.hasOwnProperty(property)){
          fbinfo.push(response[property]);
        }
      }

      fbinfo.push('https://graph.facebook.com/' + response.id + '/picture?type=large');
      
      console.log(fbinfo);

      var registered = registerUser(fbinfo);

      if(!registered){
        logUser(fbinfo)
      }

    });
  }

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '469123463260100',
      cookie     : true,  // enable cookies to allow the server to access
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.5' // use version 2.2
    });

    // Now that we've initialized the JavaScript SDK, we call
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.

    FB.getLoginStatus(function(response){
      if(response.status === 'connected'){
        getUserData();
      }
      else if(response.status === 'not_authorized'){
        alert("Give permission to our app.");
      }
      else{
        alert("Please login to Facebook.");
      }
    });
  };

    // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  //Log In Listener
  document.getElementById('loginBtn').addEventListener('click', function(){
    FB.login(function(response){
      if(response.authResponse){
        getUserData();
      }
    }, {scope: 'id,name,email,first_name,last_name,gender', return_scopes: true}); 
  }, false);
 