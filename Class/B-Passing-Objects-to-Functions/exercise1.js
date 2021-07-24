
// Here we define an Object and log the two properties firstName and surname
let satya = {
    firstName: "Satya",
    surname: "Nadella",
    age: 53
};
let g1 = "Hello " + satya.firstName + " " + satya.surname;
console.log(g1);


// Here we have a function to do the same thing
// Notice the object is passed to the input parameter called person
function greet(person){
    let greeting = "Hello " + person.firstName + " " + person.surname + " your age is" + person.age;
    return greeting;
}

let g2 = greet(satya);
console.log(g2);

// Change both strings g1 and g2 so they say 
// "Hello Satya Nadella your age is 53"