// array.map

let currenciesList = ["BRL 800.00", "GBP 45.00", "EUR 64.32", "TRY 38.22", "INR 4036.90", "BHD 201.10"];


// 1. Write a function called extractAmount 
// It should have one input parameter
// It should return a String with only the amount
// Do a search for "javascript substring" to help

function extractAmount (amount) {
    return amount.substring(4);
}
 
// 2. Use array.map to create a new array with the mapped values 

let newAmountArray = currenciesList.map(extractAmount);

// 3. Print the new array to the screen

console.log(newAmountArray);