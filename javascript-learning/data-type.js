let counter = 120;
console.log(typeof(counter)); // "number"

counter = false; 
console.log(typeof(counter)); // "boolean"

counter = "Hi";
console.log(typeof(counter)); // "string"


console.log(" ");

//  Undefined

let counter1;
console.log(counter1);        // undefined
console.log(typeof counter1); // undefined

console.log(" ");

// Null

let obj = null;
console.log(typeof obj); // object

console.log(null == undefined);

// Number

let num = 100;
// Floating-point Number
let price= 12.5; 
let discount = 0.05;

// NaN
console.log(NaN/2); // NaN
console.log(NaN == NaN); // false
console.log('a'/2); // NaN;

// String
let greeting = 'Hi'; // single quote
let message  = "Bye"; // double quote

let message = 'I\'m also a valid string'; // use \ to escape the single quote (')

let str = 'JavaScript';
str = str + ' String';

let s = 'JavaScript';
s[0] = 'j';
console.log(s); // javascript


// boolean

let inProgress = true;
let completed = false;

console.log(typeof completed); // boolean

console.log(Boolean('Hi'));// true
console.log(Boolean(''));  // false

console.log(Boolean(20));  // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(0));  // false

console.log(Boolean({foo: 100}));  // true on non-empty object
console.log(Boolean(null));// false

// Symbol

let s1 = Symbol();
console.log(Symbol() == Symbol()); // false

// bigint
let pageView = 9007199254740991n;
console.log(typeof(pageView)); // 'bigint'

// object
let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}

// Accessing an object
console.log(contact.firstName);
console.log(contact.lastName);
console.log(contact['phone']); // '(408)-555-9999'
console.log('/n')
console.log(contact['email']); // 'john.doe@example.com'