// let arr = [30,12,78,32,90];
// arr[0] = 101;

// arr.push(600);
// arr.pop();
// arr.shift();
// arr.unshift(12);
// arr.splice(2,1);
// let newArr = arr.slice(0,3);
// arr.reverse()

// ***** sort ******

//Sort in ascending order
// arr.sort(function(a,b) {
//     return a-b;
// });

//Sort in descending order
// arr.sort(function(a,b) {
//     return b-a;
// });

//**** For-Each Loop *****

// arr.forEach(function(val) {
//     console.log(val*2);
// });


//  *** Map ****

// let newArr = arr.map(function(val) {
//     return 12;
// })

// let newArr = arr.map(function(val) {
//     if(val > 25) return val;
// })


// **** Filter ****

// let arr2 = [1,2,3,4,5,6,7,8];
// let newArr = arr2.filter(function(val) {
//     if(val <= 4) return true;
// })


// **** reduce *****

// let ans = arr2.reduce(function(accumulator, val) {
//     return accumulator + val;
// },0);


// *** some ****
let arr = [45,34,89,78,65];
// let ans = arr.some(function(val) {
//     return val > 85;
// })


// **** every ***

// let ans = arr.every(function(val) {
//     return val > 5;
// })


//QS: Sort an array in ascending
// let names = ["Zara", "Arjun", "Mira", "Bhavya"];
// names.sort();

//QS: Sort an array in descending
// let names = ["Zara", "Arjun", "Mira", "Bhavya"];
// names.sort().reverse();

//QS: Merge two arrays using of spread operator
// let a = [1,2];
// let b = [3,4];

// let c = [...a, ...b];


//Qs: Add "India" to the start of this array using spread
let countries = ["USA", "UK"];
countries = ["India", ...countries];