let dog1 = {
  breed: "Dalmatian",
  name: "Marshal",
  isHungry: true,
  happiness: 6,
};

// Write an "if" statement
// If the dog is hungry, set isHungry to false and happiness to 10
if (dog1.isHungry === true ) {
  dog1.isHungry = false;
  dog1.happiness = 10;
}

console.log("Dog is hungry: " + dog1.isHungry);
console.log("Dog happiness: " + dog1.happiness);
