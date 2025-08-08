//For loop
// for(let i = 1; i<=100; i++) {
//     console.log("kamal");
// }

//while loop
// let i = 1;
// while (i < 32) {
//     console.log(i);
//     i++;
// }

//Do - while loop
// let i = 10;
// do {
//     console.log(i);
//     i++;
// } while(i <= 20);


//QS: Print number from 10 to 1
// let i = 10;
// while(i > 0) {
//     console.log(i);
//     i--;
// }

//QS: Print the even numebers from 1 to 20
// for(let i=1; i<=20; i++) {
//     if(i%2 == 0) {
//         console.log(i);
//     }
// }


//QS: print odd numbers from 1 to 15
// for(let i=1; i<=15; i++) {
//     if(i%2 ==1) {
//         console.log(i);
//     }
// }

//solve using while loop
// let i = 1;
// while(i<=15) {
//     if(i%2 === 1) {
//         console.log(i);
//     }
//     i++;
// }

//QS: Print the multiplication table of 5 
// for(let i=1; i<=10; i++) {
//     console.log(`5 * ${i} = ${5 * i}`);
// }

// for(let i = 1; i<=10; i++) {
//     console.log(5*i);
// }

//QS: Find the sum of numbers from 1 t0 100
// let sum = 0;
// for(let i=1; i<=100; i++) {
//     sum = sum + i;
// }
// console.log(sum);   

//QS: Print all numbers b/w 1 to 50 that are divisible by 3
// for(let i=1; i<=50; i++) {
//     if(i%3 === 0) {
//         console.log(i);
//     }
// }


//IMP ---------
//QS: Ask the user for a number and print wheather each number from 1 to that number is even or odd

// let val = prompt("Give a number");
// for(let i=1; i<=val; i++) {
//     if(i%2 === 0) {
//         console.log(`${i} is even`);
//     } else {
//         console.log(`${i} is odd`);
//     }
// }


//Qs: Count how many numbers b/w 1 to 100 are divisible by 3 and 5

// let count = 0;
// for(let i=1; i<=100; i++) {
//     if(i%3 === 0 && i%5 === 0) {
//         console.log(i);
//         count++;
//     }
// }
// console.log(`Total numbers: ${count}`);


//Stop at first mult. of 7 using of break
// let val = prompt("Give a value")
// for(let i=1; i<=val; i++) {
//     if(i%7 === 0) {
//         break;
//     }
//     console.log(i);
// }

//QS: Print first 5 odd numbers

// let count = 0;
// for(let i=1; i<=100; i++) {
//     if(i%2 === 1) {
//         count++;
//         console.log(i);
//     }
//     if(count === 5) break;
// }