let destination1 = {
    destinationName: "Edinburgh",
    distanceKms: 80,
  };
  
  let destination2 = {
    destinationName: "London",
    distanceKms: 650,
  };
  
  let destination3 = {
    destinationName: "Paris",
    distanceKms: 900,
  };
  
  let destination4 = {
    destinationName: "Dublin",
    distanceKms: 350,
  };
  
  let travelDestinations = [
    destination1,
    destination2,
    destination3,
    destination4,
  ];

// 1. Write a function called isNear 
// It should have one input parameter called destination
// It should return true if the distance of the destination is less than 400 Kms
// otherwise return false
function isNear (destination){
  return (destination.distanceKms < 400);
}
// 2. Use array.filter to create a new array with all the 
// destination Objects less than 400 Kms away

console.log(isNear(destination1))

// 3. Print the new array of Objects to the screen
let  destinationNear = ;

