// Write a program to reserve a string

let myName = "Mabel";
let j = "";

for (let i = myName.length - 1; i >= 0; i--) {
  // j += myName[i];
  console.log(myName[i]);
}
console.log(j);

let totalNum = [8, 9, 13, 24, 15];
let max = totalNum[0];

for (let i = 0; i < totalNum.length; i++) {
  if (totalNum[i] > max) {
    max = totalNum[i];
  }
  // console.log(totalNum[i] < max);
  //max = totalNum[i];
}

console.log(max);

let sumNum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumNum = sumNum + i;
  }
}

console.log(sumNum);

console.log(" ");

let herName = "Mabel";
let herNameOutput = "";
for (let i = 0; i < herName.length; i++) {
  if ("a" === herName[i]) {
    herNameOutput += "_";
  } else if ("e" === herName[i]) {
    herNameOutput += "_";
  } else if ("i" === herName[i]) {
    herNameOutput += "_";
  } else if ("o" === herName[i]) {
    herNameOutput += "_";
  } else if ("u" === herName[i]) {
    herNameOutput += "_";
  } else {
    herNameOutput += herName[i];
  }
  //herNameOutput += herName[i];
  //console.log(herName[i]);
}

console.log(herNameOutput);

let sum = [1, 2, 3, 4, 5];

for (let i = 0; i <= sum.length; i++) {
  if (sum === sum[i]) {
    console.log(sum[i]);
  }
}

// console.log(sum[0]);
// console.log(sum[0], sum[1]);
// console.log(sum[0], sum[1], sum[2]);
// console.log(sum[0], sum[1], sum[2], sum[3]);
// console.log(sum[0], sum[1], sum[2], sum[3], sum[4]);

let f = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
      f += j;
     
  }
  console.log(f);
  f = "";
}

