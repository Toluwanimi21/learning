let person = {
    name: 'John',
    toString: function () {
      return '25';
    },
    valueOf: function () {
      return '30';
    },
  };
  
  console.log(+person);

  
// subtraction
let x = 10;
let y = -x;

console.log(y); // -10

// Incremnt(++) and Decrement(--)
let age = 25;
++age;

console.log(age); // 26
// or
let age = 25;
age = age + 1;
console.log(age); // 26


let weight = 90;
--weight;

console.log(weight); // 89

let weight = 90;
weight = ++weight + 5;

console.log(weight); // 96

let weight = 90;
weight = --weight + 5;

console.log(weight); // 94