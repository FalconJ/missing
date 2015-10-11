$(document).ready(function(){
    
    $("#person").click(function(){
        $("#personForm").show();
        $("#petForm").hide();
    });
    $("#pet").click(function(){
        $("#personForm").hide();
        $("#petForm").show();
    });
});