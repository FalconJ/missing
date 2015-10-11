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
  
function missPeople(){

    var date = new Date($("#personLastSeen").val());

    var data = {
        Name        : $("#personFirstName").val() + " " + $("#personLastName").val(),
        Age         : Number($("#personAge").val()),
        LastSeen    : date,
        Description : $("#personDescription").val(),
        Illness     : $("#personIllness").val(),
        Sex         : $("#personSex").val(), 
    };

    $("#personForm")[0].reset();

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

var muchDoge = Parse.Object.extend('PetPost');

function missDoge(){

    var date = new Date($("#petLastSeen").val());

    var data = {
        Name        : $("#petName").val(),
        Animal      : $("#petAnimal").val(),
        Age         : Number($("#petAge").val()),
        LastSeen    : date,
        Description : $("#petDescription").val(),
        Illness     : $("#petIllness").val(),
        Sex         : $("#petSex").val(),
        Reward      : Number($("#petReward").val()),
    };

    wow = new muchDoge();

    $("#petForm")[0].reset();

    wow.save(data,{
        success     : function(wow){
                        console.log(wow.get('Name') + " " + wow.get('Age'));
        },
        error       : function(wow, error){
                        console.log(wow);
                        console.log("Error: " + error.message);
        }
    });
}
