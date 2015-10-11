$(document).ready(function(){
    
    $("#person").click(function(){
        $("#personForm").show();
        $("#petForm").hide();
        $("#personForm")[0].reset();
    });
    $("#pet").click(function(){
        $("#personForm").hide();
        $("#petForm").show();
        $("#petForm")[0].reset();
    });
});