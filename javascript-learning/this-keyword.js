// let car = {
//     make: "bmw",
//     model: "745li",
//     year: 2010,
//     getPrice: function() {
//         return 5000;
//     },

//     printDescription: function() {
//         console.log(this.mak + " " + this.model);
//     }
// }

// car.printDescription();
// console.log(car.year);

let str = "Hello";
console.log(str[str.length - 1]);

console.log(" \n");

let message = "Afternoon";
console.log(message[message.length - 1]);

console.log("\n");

// Concatenate
let className = 'btn';
className += ' btn-primary'
className += ' none';

console.log(className);

console.log("\n");

// Converting values to string
let status = false;
let str1 = status.toString(); // "false"
let back = Boolean(str1); // true

// Comparing string
let result = 'a' < 'b';
console.log(result); // true
let result = 'a' < 'B';
console.log(result); // false