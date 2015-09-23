function clickedOnTableView(e) {
	//Display to console log the _event object for debugging
	console.log(JSON.stringify(e));

	alert("Item selecionado: " + sampleTableData[e.index].name);
}

var sampleTableData = [];

var peopleService = require('peopleService');
peopleService.getPeople(function(_response) {

	console.log("RESPONSE: " + _response);
	if (_response.success) {

		var responseData = _response.data.results;
		if (responseData) {

			for (var i = 0; i < responseData.length; i++) {
				var rowItem = responseData[i].user;
				sampleTableData.push(rowItem);
				var rowDataController = Alloy.createController('rowData', rowItem);
				Ti.API.info(JSON.stringify(rowDataController.getView()));

				$.myTableView.appendRow(rowDataController.getView());

			};
		}
	} else {
		alert(_response.error);
	}

});

$.index.open();
