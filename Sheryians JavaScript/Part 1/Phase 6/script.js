//Function Declaration
function lolo() {

}

//Function expression
let kalu = function() {

}

//Fat arrow function
let ramu = ()=> {

}


// function dance(naam) {
//     console.log(`${naam} naach rha hai`);
// }
// dance("gadha");
// dance("suar");
// dance("dog");


//***Sum of two numbers****
// function add(num1, num2) {
//     console.log(`The sum of two numbers is:`,num1 + num2)
// }
// add(12,12);
// add(10,10);


//*****Default parameter*****
// function add(v1, v2) {
//     console.log(v1+v2); //= NaN   
// }
// add();

// function add1(v1=0, v2=0) {
//     console.log(v1+v2); //0
// }
// add1();

// function add2(v1=0, v2=0) {
//     console.log(v1+v2); //5
// }
// add2(2,3);


//*****Rest Parameter******
// function abcd(...val) {
//     console.log(val);
// }
// abcd(1,2,3,4,5,6,7);


//**** return values ****
// function abcd() {
//     return 12;
// }
// let val = abcd();
// console.log(val);


// *** First Class Function ****
// function abcd(val) {
//     val();
// }
// abcd(function() {
//     console.log("Hello i am in function")
// });

// ***Higher Order Function ****
// function abcd(val) {

// }
// abcd(function() {

// })


// function aalu() {
//     return function() {
//         console.log("abcscd")
//     }
// }
// aalu()();  //1st () is used for run the aalu()  then 2nd () used for run the function inside the aalu


// **** Impure vs Pure function *****

// let a = 12;
// //---- This is pure func
// function began() {
//     console.log("I am began");
// }

// //---- This is Impure func
// function papa() {
//     a++;
// }


// ******* Closures *******

// function lulu() {
//     let a = 12;
//     return function() {
//         console.log(a);
//     }
// }


// *** Lexical Scoping *****

// function abcd() {
//     let a = 12;
//     function efg() {
//         let b = 14;
//         function hij() {
//             let c = 15;
//         }
//     }
// }

// ****** IIFE ******

// (function abcd() {
//     console.log("I am a IIFE")
// })();  // the last () means it will imediate invoke no need to declare the function


// **** Hoisting in declaration ***** 
//Hoisting means --> banane se pehle hum kisi cheez ko use kar paa rhe hai
// abcd();








// function abcd() {
//     console.log("I am a superman");
// }


//But we can't use the Hoisting in the expression function

// val1();  // Thrown an error of: script.js:151 Uncaught ReferenceError: Cannot access 'val1' before initialization

// let val1 = function() {
//     console.log("I am a sweet girl")
// }


//Qs: What the return value of this func
// function f() {
//     return;
// }

// console.log(f())  //undefined

//QS: Pass a fnc into another fnc and execute it inside

// function abcd(val) {
//     val();
// }

// abcd(function() {
//     console.log("I am console")
// })



//**** Write a BMI calculator ***

// function bmi(weight, height) {
//     return weight / (height * height);
// }

// console.log(bmi(70,1.8).toFixed(3));