exports.getPeople = function(_callback) {
	var url = "http://api.randomuser.me/?results=5";
	var client = Ti.Network.createHTTPClient({
		// function called when the response data is available
		onload : function(e) {
			Ti.API.info("Received text: " + this.responseText);
			_callback({
				success : true,
				data : JSON.parse(this.responseText)
			});
		},
		// function called when an error occurs, including a timeout
		onerror : function(e) {
			Ti.API.error(e.error);
			_callback({
				success : false,
				error : e
			}); 
		},
		timeout : 5000 // in milliseconds
	});
	// Prepare the connection.
	client.open("GET", url);
	// Send the request.
	client.send();
};
