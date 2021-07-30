// array.filter

let agesList = [24, 18, 15, 38, 17, 60, 21];

// 1. Write a function called canDrive 
// It should have one input parameter called age
// It should return true if the age is 17 or above
// otherwise return false
function canDrive (age){
    return age >= 17;
}
//console.log(canDrive(agesList));

// 2. Use array.filter to create a new array with only the values in agesList 
// that can legally drive

let ableToDrive = agesList.filter(canDrive);

// 3. Print the new array to the screen

console.log(ableToDrive);

