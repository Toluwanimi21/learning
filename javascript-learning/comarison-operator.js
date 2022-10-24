let var1 = 4
var1 !== "3"
console.log(var1);

let r1 = 20 > 10; // 
console.log(r1)
let r2 = 20 < 10; // false
console.log(r2);
let r3 = 10 == 10; // true
console.log(r3);
let r4 = 20 === 30;
console.log(r4);
let r5 = 30 === "30";
console.log(r5);
let r6 = 5 === 6;
console.log(r6);

console.log(" ");

// addition
let a = 3 + 2;
console.log(a);;

// subtraction
let b = 4 - 1;
console.log(b);

// multiplication
let c = 5 * 8;
console.log(c);

// division
let d = 8 / 2;
console.log(d);

console.log(" ");

let energy = {
    valueOf() {
      return 100;
    },
  };
  
  let currentEnergy = energy - 10;
  console.log(currentEnergy);
  
  currentEnergy = energy + 100;
  console.log(currentEnergy);
  
  currentEnergy = energy / 2;
  console.log(currentEnergy);
  
  currentEnergy = energy * 1.5;
  console.log(currentEnergy);
  

  // comparison numbers
  let a = 10, 
    b = 20; 

console.log(a >= b);  // false
console.log(a == 10); // true

// comparison strings
let name1 = 'alice',
    name2 = 'bob';    

let result = name1 < name2;
console.log(result); // true
console.log(name1 == 'alice'); // true

let f1 = 'apple',
    f2 = 'Banana';
let result = f2 < f1;
console.log(result); // true

let f1 = 'apple',
    f2 = 'Banana';

let result = f2.toLowerCase() < f1.toLowerCase();
console.log(result); // false

console.log(10 < '20'); // true

let apple = {
  valueOf: function () {
    return 10;
  },
};

let orange = {
  toString: function () {
    return '20';
  },
};
console.log(apple > 10); // false
console.log(orange == 20); // true

console.log(true > 0); // true
console.log(false < 1); // true
console.log(true > false); // true
console.log(false > true); // false
console.log(true >= true); // true
console.log(true <= true); // true
console.log(false <= false); // true
console.log(false >= false); // true


console.log(null == undefined); // true

// strict equal and not equal
console.log("10" == 10); // true
console.log("10" === 10); // false