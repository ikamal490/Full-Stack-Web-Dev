let a = 0;

if(a) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
/*
!!0 --> Falsy 
Output:
Falsy
*/


let score = 75;
let grade = score >= 90 ? "A" : score  >= 75 ? "B" : score >= 60 ? "C" : "Fail";
console.log(grade);

/*
Output:
B
*/

let x = 3;
let y = x++;
console.log(x,y);
//4 3 --output


let p = 4;
let q = ++p;
console.log(p, q);
// 5 5  --output


let m = 10;
console.log(m--);
console.log(m); 
/*
Output:
10
9
*/

let n = 5;
let result = n++ + ++n;  //  5 + 7 
console.log(result);
// 12 --output

let likes = 100;

function likePost() {
    return ++likes;
}

console.log(likePost());
console.log(likes);
/*
Output:
101
101
*/