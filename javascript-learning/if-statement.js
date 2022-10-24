// check if the number is positive

const number = 5;

// check if number is greater than 0
if (number > 0) {
 // the body of the if statement
  console.log("The number is positive");
}

console.log("The if statement is easy");


console.log(" ");

let hour = 1;

if(hour < 4) {
  console.log("Good Day");
} else {
  console.log("Good Night");
}

console.log(' ');
// check if the number is positive or negative/zero
const result = 2;

// check if number is greater than 0
if (result > 0) {
  console.log("The number is positive");
}
// if number is not greater than 0
else {
  console.log("The number is either a negative number or 0");
}

console.log("The if...else statement is easy");

console.log(" ");

// check if the number if positive, negative or zero
const myNumber = 7;


// check if number is greater than 0
if (myNumber > 0) {
    console.log("The number is positive");
}
// check if number is 0
else if (myNumber == 0) {
  console.log("The number is 0");
}
// if number is neither greater than 0, nor zero
else {
    console.log("The number is negative");
}

console.log("The if...else if...else statement is easy");


console.log(' ');

let age = 18;

if (age >= 18) {
  console.log('You can sign up.');
} else {
  console.log('You must be at least 18 to sign up.');
}

console.log(" ");

let herAge = 20;

if (herAge >= 22) {
  console.log("You must be 18years upward before you cannot sign up");
} else {
  console.log("You must have met the requirement");
}
console.log(" ");

let age_ = 16;

if (age_ >= 18) {
  console.log('You can sign up.');
} else {
  console.log('You must be at least 18 to sign up.');
}


// ternary operator

// program to check pass or fail

let myMarks = 60;

// check the condition
let results = (myMarks >= 40) ? 'pass' : 'fail';

console.log(`You ${results} the exam.`);


// check the age to determine the eligibility to vote
let totalNum = 15;
let remark;

if (totalNum >= 18) {
      remark = "You are eligible to vote.";
} else {
      remark = "You are not eligible to vote yet.";
}

console.log(remark);


console.log(" ");

// ternary operator to check the eligibility to vote
let age = 15;
let result =
    (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet";
console.log(result);

console.log(" ");

// program to check if number is positive, negative or zero
let a = 3;
let result = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${result}.`);
