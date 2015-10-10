$(document).ready(function(){
  callFB();
});

function callFB(){
  window.fbAsyncInit = function(){
    FB.init({
      appId : '469123463260100', 
      cookie : true,
      xfbml : true,
      version : 'v.25'
    });
  };

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}