$(document).ready(function(){
    
    $("#person").click(function(){
        $("#formH").show();
        $("#formP").hide();
    });
    $("#pet").click(function(){
        $("#formP").show();
        $("#formH").hide();
    });
});