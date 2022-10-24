let count = 3;
if(count == 4) {
    console.log("Count is 4");
} else {
    console.log("count is NOT 4");
}


// Switch

let hero = "superman";
switch(hero.toLowerCase()) {
    case "superman":
        console.log("super strength");
        console.log("X-ray vision");
        break;
        case "batman":
            console.log("intelligence");
            console.log("fighting skills");
            break;
        default:
            console.log("member of JLA");

}


// ternary

let a = 1, b = "1";
let result = (a == b) ? 'equal' : 'unequal';
console.log(result); 