let age = 18;
if (age >= 18) {
  console.log('You can sign up');
} 

// Nested if statement
let age = 16;
let state = 'CA';

if (state == 'CA') {
  if (age >= 16) {
    console.log('You can drive.');
  }
} //  avoid nested if statement

// instead do this
let age = 16;
let state = 'CA';

if (state == 'CA' && age == 16) {
  console.log('You can drive.');
}