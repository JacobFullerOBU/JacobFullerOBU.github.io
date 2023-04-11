function populateTableFromCSV(csvFile) {
    Papa.parse(csvFile, {
      header: true,
      download: true,
      complete: function(results) {
        var table = document.getElementById("myTable");
        var tbody = table.getElementsByTagName("tbody")[0];
        for (var i = 0; i < results.data.length; i++) {
          var row = tbody.insertRow(i);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          cell1.innerHTML = results.data[i].Name;
          cell2.innerHTML = results.data[i].Email;
          cell3.innerHTML = results.data[i].Phone;
        }
      }
    });
  }