// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
var dataFilter = 0;
ufos = data

console.log(data);

data.forEach((ufoSighting) => {
	var row = tbody.append("tr");
	Object.entries(ufoSighting).forEach(([key, value]) => {
		var cell = tbody.append("td");
		cell.text(value);
	});
});

// Enable filter button
var submit = d3.select("#filter-btn");

submit.on("click", function () {

	// Disable page from refreshing
	d3.event.preventDefault();

	// Select datetime as input
	var inputElement = d3.select("#datetime");

	// Obtain search value
	var inputValue = inputElement.property("value");

	var filteredData = ufos.filter(ufo => ufo.datetime === inputValue);
	buildTable(filteredData);

});

// Perform datetime filter on table data
function buildTable(dataFilter) {

	tbody.html("");
	dataFilter.forEach((ufoSighting) => {
		var row = tbody.append("tr");
		Object.entries(ufoSighting).forEach(([key, value]) => {
			var cell = tbody.append("td");
			cell.text(value);
		});
	});
}