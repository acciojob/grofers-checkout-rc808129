const getSum = () => {
    let sum = 0;
    const prices = document.querySelectorAll('.price');
    prices.forEach(priceElement => {
        sum += parseFloat(priceElement.textContent);
    });

    // Naya row aur cells create karna
    const newRow = document.createElement('tr');
    
    const firstCell = document.createElement('td');
    firstCell.textContent = "Total Price";
    newRow.appendChild(firstCell);
    
    const secondCell = document.createElement('td');
    secondCell.textContent = sum; // Yahan sum ko set karna
    newRow.appendChild(secondCell);
    
    // Row ko table mein append karna
    const table = document.querySelector('table');
    table.appendChild(newRow);
};

// Button create karna
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price"; // Button par text set karna
document.body.appendChild(getSumBtn); // Button ko body mein add karna

// Button click event listener
getSumBtn.addEventListener("click", getSum); // Button par click hone par getSum function call karna
