var parseID  = "R6bSzRV4B4p0PPOonPBfJMYOmVzc30ekeJhyQUEv";
var parseKey = "tVBAmJERPajXL1k2vDwPNTXGlwlxRLomB6ccWJv5";

$(document).ready(function () {

	$.ajax({
		url			:  "https://api.parse.com/1/classes/PersonPost",
		headers		: {
			"X-Parse-Application-Id": parseID,
			"X-Parse-REST-API-Key": parseKey
		},
		contentType	: "application/json",
		dataType	: "json",
		type 		: "GET",
		success		: function(data){
			console.log("get personas");
			updateViewPerson(data);
		},
		error		: function(data, error){
			console.log("Error: " + error);
		}

	});

	$.ajax({
		url			: "https://api.parse.com/1/classes/PetPost",
		headers		: {
			"X-Parse-Application-Id": parseID,
			"X-Parse-REST-API-Key": parseKey
		},
		contentType	: "application/json",
		dataType	: "json",
		type 		: "GET",
		success		: function(data){
			console.log("get personas");
			updateViewPet(data);
		},
		error		: function(data, error){
			console.log("Error: " + error);
		}

	});

});

function updateViewPerson(data) {	
	var table=$("#personas");
	table.html('');
	$.each(data.results, function (index, value) {
		var trEl=$('<tr><td>'+value.Name+'</td><td>'+value.Age+'</td><td>'+value.Description+'</td><td>'+value.Illness+'</td><td>'+value.Sex	+'</td></tr>');	
		table.append(trEl);		
	});
}

function updateViewPet(data) {	
	var table=$("#mascotas");
	table.html('');
	$.each(data.results, function (index, value) {
		var trEl=$('<tr><td>'+value.Name+'</td><td>'+value.Animal+'</td><td>'+value.Age+'</td><td>'+value.Description+'</td><td>'+value.Illness+'</td><td>'+value.Sex+'</td><td>'+value.Reward+'</td></tr>');	
		table.append(trEl);		
	});
}

