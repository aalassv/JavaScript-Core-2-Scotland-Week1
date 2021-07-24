
let student1 = {
    name: "Reshma Saujani",
    attendance: 85,
    examScore: 65,
    hasPassed: false
};

// Write an "if" statement
// If attendance is equal or greater than 90 AND exam score is above 60,
// set hasPassed to true
if (student1.attendance >= 90 && student1.examScore > 60){
    student1.hasPassed = true;
}
console.log("Has student1 passed? " + student1.hasPassed);