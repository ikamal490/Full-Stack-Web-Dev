//if, else if, else ladder
console.log("Hello World")

let age = 0;
let grace = 2;

console.log(age + grace);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age % grace);
console.log(age ** grace);  // use for power

if(age > 18) {
    console.log("You can drive");
} 
else if (age == 0) {
    console.log("Are you kidding?");
}
else {
    console.log("You cannot drive");
}


//Ternary Operator

let a = 9;
let b = 2;
let c = (a>b) ? (a+b) : (a-b);
console.log(c);

/*
Translates to:
if(a>b) {
    let c = a + b;
} else {
let c = a - b; 
}
*/