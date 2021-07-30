let destination1 = {
    destinationName: "Edinburgh",
    distanceKms: 80,
    transportations: ["car", "bus", "train"],
  };
  
  let destination2 = {
    destinationName: "London",
    distanceKms: 650,
    transportations: ["car", "bus", "train"],
  };
  
  let destination3 = {
    destinationName: "Paris",
    distanceKms: 900,
    transportations: ["train", "plane"],
  };
  
  let destination4 = {
    destinationName: "Dublin",
    distanceKms: 350,
    transportations: ["plane", "ferry"],
  };
  
  let travelDestinations = [
    destination1,
    destination2,
    destination3,
    destination4,
  ];

// 1. Write a function called isAbove300ByTrain 
// It should have one input parameter called destination
// It should return true if the distance is more than 300 kms away and reachable by train
// otherwise return false

function isAbove300ByTrain (destination){
  return destination.distanceKms >= 300 && destination.transportations.includes("train");
}

// 2. Use array.filter to create a new array with all the 
// destination Objects more than 300 kms far away and reachable by train

let reachableByTrain = travelDestinations.filter(isAbove300ByTrain);

// 3. Print the new array of Objects to the screen

console.log(reachableByTrain);