// // || OR operator
// let isAGirl = true;
// let isABoy = false;
// let totalNum = 4;

// console.log(isAGirl || isABoy); // true
// console.log(isABoy || isABoy); // false
// console.log((totalNum > 2) || (totalNum < 2)); // true


// console.log(" ");

// // AND operator

// let a = true;
// let b = false;
// let c = 6;

// console.log(a && a); // true
// console.log(a && b); //false
// console.log((c > 2) && (c < 2)); // false


// console.log(" ");


// // NOT operator

// let d = true;
// let e = false;

// console.log(!d); // false
// console.log(!e); // true


let eligible = false,
    required = true;

console.log(!eligible); // true
console.log(!required); //  false

console.log(!undefined); // true
console.log(!null); // true
console.log(!20); //false
console.log(!0); //true
console.log(!NaN); //true
console.log(!{}); // false
console.log(!''); //true
console.log(!'OK'); //false
console.log(!false); //true
console.log(!true); //false


let counter = 10;
console.log(!!counter); // true

// &&  AND
let eligible = false,
    required = true;

console.log(eligible && required); // false      

// OR ||
let eligible = true,
    required = false;

console.log(eligible || required); // true