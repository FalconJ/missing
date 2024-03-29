var parseID  = "R6bSzRV4B4p0PPOonPBfJMYOmVzc30ekeJhyQUEv";
var parseKey = "tVBAmJERPajXL1k2vDwPNTXGlwlxRLomB6ccWJv5";

$(document).ready(function(){
	getMessages();
	$("#send").click(function(){
		var username = $("#username").val()
		var message = $("#message").val()
		console.log(username)
		console.log("!")
		$.ajax({
			url: " https://api.parse.com/1/classes/MessageBoard",
			headers: {
				"X-Parse-Application-Id": parseID,
				"X-Parse-REST-API-Key": parseKey
			},
			contentType: "application/json",
			dataType: "json",
			processData: false,
			data: JSON.stringify({
				"username": username,
				"message": message
			}),
			type: 'POST',
			success: function() {
				console.log("sent");
				getMessages();
			},
			error: function() {
				console.log("error");
			}
		});

	});
})
function getMessages() {
	$.ajax({
		url: " https://api.parse.com/1/classes/MessageBoard",
		headers: {
			"X-Parse-Application-Id": parseID,
			"X-Parse-REST-API-Key": parseKey
		},
		contentType: "application/json",
		dataType: "json",
		type: 'GET',
		success: function(data) {
			console.log("get");
			updateView(data);
		},
		error: function() {
			console.log("error");
		}
	});
}

function updateView(messages) {	
	var table=$(".table tbody");
	table.html('');
	$.each(messages.results, function (index, value) {
		var trEl=$('<tr><td>'+value.username+'</td><td>'+value.message+'</td><td><a class="btn btn-primary"  data-id="' + value.objectId +'" onclick="deleteMessage(this);">delete</a></td></tr>');		
		table.append(trEl);		
	});

	console.log(messages);
}

function deleteMessage(obj) {
	
	var objectId = $(obj).data("id");
		
		$.ajax({
			url: " https://api.parse.com/1/classes/MessageBoard/" +objectId ,
			headers: {
				"X-Parse-Application-Id": parseID,
				"X-Parse-REST-API-Key": parseKey
			},
			contentType: "application/json",
			dataType: "json",
			processData: false,
			data:  JSON.stringify({}),
			type: 'DELETE',
			success: function() {
				console.log("delete");
				getMessages();
			},
			error: function(e) {
				console.log(e);
			}
		});

}