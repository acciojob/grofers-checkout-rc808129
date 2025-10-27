const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code 
	let sum = 0;
	const prices = document.querySelectorAll(.'price');
	prices.forEach(priceElement => {
		sum+= parseFloat(priceElement.textContent);
	});

	    // Step 4: Create a new row for total price
    const table = document.querySelector('table'); // Select the table
    const newRow = document.createElement('tr'); // Create a new row
    const newCell = document.createElement('td'); // Create a new cell

    newCell.colSpan = 2; // Make the cell span across two columns
    newCell.textContent = `Total Price: ${sum}`; // Set the total price text

    newRow.appendChild(newCell); // Add the cell to the new row
    table.appendChild(newRow); // 
  
};

getSumBtn.addEventListener("click", getSum);

