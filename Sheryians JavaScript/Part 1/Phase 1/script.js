//Question 1
// console.log(nm)
// var nm = "kamal"

/*
output: undefined
*/


//Question 2
// console.log(age)
// let age = 23

/*
Output:
ReferenceError: Cannot access 'age' before initialization
*/


//Question 3
// var x = 1 //global
// {
//     var x = 2 //global -- it will update the x value
// }
// console.log(x)

/*
Output:
2
*/

//Question 4
let a = 10 
{
    let a = 20 //block scope
    console.log("Inside:", a)
}
console.log("Outside:", a)

/*
Output:
/*
Output:
Inside: 20
Outside: 10
*/