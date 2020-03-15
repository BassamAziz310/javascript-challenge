let tableData = data;



let button = d3.select("#filter-btn");




button.on("click", function () {
    let inputElement = d3.select("#datetime");

    let inputValue = inputElement.property("value");

    let filteredData = tableData.filter((sighting) => sighting.datetime === inputValue);

    console.log(filteredData);

    function buildTable(Date, City, State, Country, Shape, Comments) {
        let table = d3.select("#ufo-table");
        let tbody = table.select("tbody");
        let trow;
        for (let i = 0; i < 12; i++) {
            trow = tbody.append("tr");
            trow.append("th").text(Date[i]);
            trow.append("th").text(City[i]);
            trow.append("th").text(State[i]);
            trow.append("th").text (Country [i]);
            trow.append("th").text(Shape[i]);
            trow.append("th").text(Comments[i]);
        }
    }


});



//row.append('tbody').console.log(tableData);

// build plot (); 




// check the uotemp for the dara visual elemtns 