// dot notation

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(person.firstName);
console.log(person.lastName);

// Array-like notation
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(person['firstName']);
console.log(person['lastName']);

// modifying the value of a property
let person1 = {
    first_Name: 'John',
    lastName: 'Doe'
};

person.first_Name = 'Jane';

console.log(person1); // firstName: 'Jane', lastName: 'Doe'