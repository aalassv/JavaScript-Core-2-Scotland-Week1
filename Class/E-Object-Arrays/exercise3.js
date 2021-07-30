

let person1 = {
    firstName: "Sundar",
    surname: "Pichai",
    jobTitle: "CEO of Alphabet‎ and ‎Google"
};
let person2 = {
    firstName: "Reshma",
    surname: "Saujani",
    jobTitle: "CEO of Girls Who Code"
};
let person3 = {
    firstName: "Arvind",
    surname: "Krishna",
    jobTitle: "CEO of IBM"
};
let peopleList = [person1, person2, person3];

// 1. Write a function called describePerson 
// It should have one input parameter called person
// It should return a String which says firstName + surname + " is the " + jobTitle

function describePerson (person){
     //return person.firstName +" "+ person.surname + "is the " + person.jobTitle;
     return `${person.firstName} ${person.surname} is the ${person.jobTitle}`
}

// 2. Use array.map to create a new array of the descriptions

let peopleDescription = peopleList.map(describePerson);

// 3. Print the new array to the screen

console.log(peopleDescription);
