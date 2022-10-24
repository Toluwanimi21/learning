// Equal to Operation

let cat = 4;
let dog = 7;
let animal = "Lion";

console.log(cat == 4); // true
console.log(dog == 7); // true
console.log(animal == "lion"); // false

console.log(" ");
// Not equal to Operator

let num = 4;
let place = "School";

console.log(num != 3); // true
console.log(place != "school"); // true


console.log(" ");

// Strict equal to

let myNum = 7;
console.log(myNum === 7); // true
console.log(myNum === "7"); // false

console.log(" ");

// greater than 

let totalSum = 60;

console.log(totalSum > 50); //true

console.log(" ");

// greater than or equal to

let sumTotal = 80;
console.log(sumTotal >= 80); // true


console.log(" ");

// less than

let pen = 6;
let paper = 4;

console.log(pen < 5); // false
console.log(paper < 5); // true

console.log(" ");

// less than or equal to

let pencil = 7;

console.log(pencil <= 8); //true
console.log(pencil <= 7); //true

// Addition
let sum = 10 + 20;
console.log(sum); // 30
let netPrice    = 9.99,
    shippingFee = 1.99;
let grossPrice  = netPrice + shippingFee;

console.log(grossPrice);

// subtraction
let result = 30 - 10;
console.log(result); // 20


// Multiplication
let result = 2 * 3;
console.log(result);

let result = '5' * 2;

console.log(result);

// division
let result = 20 / 10;

console.log(result); // 2

let energy = {
    valueOf() {
      return 100;
    },
  };
  
  let currentEnergy = energy - 10;
  console.log(currentEnergy); // 90
  
  currentEnergy = energy + 100;
  console.log(currentEnergy); // 200
  
  currentEnergy = energy / 2;
  console.log(currentEnergy); // 50
  
  currentEnergy = energy * 1.5;
  console.log(currentEnergy); // 150

  
  let energy = {
    toString() {
      return 50;
    },
  };
  
  let currentEnergy = energy - 10;
  console.log(currentEnergy); // 40
  
  currentEnergy = energy + 100;
  console.log(currentEnergy); // 150
  
  currentEnergy = energy / 2;
  console.log(currentEnergy); // 25
  
  currentEnergy = energy * 1.5;
  console.log(currentEnergy); // 75
  