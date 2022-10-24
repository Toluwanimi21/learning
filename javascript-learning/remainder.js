// let result = '5' + 2;

// console.log(result);

let remainder = 5 % -2;
console.log(remainder); // 1

remainder = 5 % 2;
console.log(remainder); // 1

let remainder = -5 % 3;
console.log(remainder); // -2

remainder = -5 % -3;
console.log(remainder); // -2

let num = 13;
let isOdd = num % 2;

// remainder vs modulo operator
const mod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor;

// dividend and divisor have the same sign
console.log('remainder:', 5 % 3); // 2
console.log('modulo:', mod(5, 3)); // 2

// dividend and divisor have the different signs
console.log('remainder:', -5 % 3); // -2
console.log('modulo:', mod(-5, 3)); // 1
