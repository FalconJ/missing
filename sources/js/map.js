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

Parse.initialize("R6bSzRV4B4p0PPOonPBfJMYOmVzc30ekeJhyQUEv", "amWdFqFhwmP7jLGPh0zCI2ozm5pjVdoqz9wiTGeL");

var ParseObj = Parse.Object.extend('PersonPost');

//$('form:first').submit(function(e){
  
  function missPeople(e){
    console.log("hi guise");
    e.preventDefault();

    var data = {
        Name        : $("#personFirstName").val() + " " + $("#personLastName").val(),
        Age         : $("#personAge").val(),
        LastSeen    : $("#personLastSeen").val(),
        Description : $("#personDescription").val(),
        Illness     : $("#personIllness").val(),
        Sex         : $("#personSex").val(), 
    };

    parseObj = new ParseObj();

    parseObj.save(data, {
        success     : function(parseObj){
                        console.log(parseObj.get('Name') + " " + parseObj.get('Age'));
        },
        error       : function(parseObj, error){
                        console.log(parseObj);
                        console.log("Error: " + error.message);
        }   

    });
}
//});
