function insert_Row() {
  const table = document.getElementById("sampleTable");


  const newRow = table.insertRow();


  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  const rowCount = table.rows.length;
  cell1.textContent = `Row${rowCount} cell1`;
  cell2.textContent = `Row${rowCount} cell2`;

  console.log(`Inserted Row${rowCount}`);
}