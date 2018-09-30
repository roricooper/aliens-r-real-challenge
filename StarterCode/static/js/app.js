// from data.js
var tableData = data;
// Get a reference to the table body
var tbody = d3.select("tbody");
// Console.log the ufo data from data.js
console.log(data);

var submit = d3.select("#filter-btn");
submit.on("click", function () {
	// Prevent the page from refreshing
    d3.event.preventDefault();
    d3.select('tbody').selectAll('tr').remove();
	// Select the input element and get the raw HTML node
	var inputElement = d3.select("#datetime");
	// Get the value property of the input element
	var inputValue = inputElement.property("value");
	var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
	// console.log(filteredData);
	filteredData.forEach((ufoSighting) => {
		var row = tbody.append("tr");
		Object.entries(ufoSighting).forEach(([key, value]) => {
			var cell = row.append("td");
			cell.text(value);
		});
	});
});
