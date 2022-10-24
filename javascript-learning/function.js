function sayMyName() {
    console.log('---------');
    console.log('Josh');
    console.log('Funto');
}

sayMyName();

function calculateTax(amount) {
    let result = amount * 0.0825;
    return result; 
}

let tax = calculateTax(100);
console.log(tax);