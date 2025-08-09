// ****** global scope - ke andar this ki value 'window' hoti hai
// console.log(this)


// ***** function scope - ke andar this ki value 'window' hoti hai
// function abcd() {
//     console.log(this)
// }
// abcd()


// ******* Method --  ke andar this ki value 'object' hoti hai
// let obj = {
//     name: "kamal",
//     age: 20,
//     sayName: function() {
//         console.log(this);
//     },
// }
// obj.sayName()


// ****** Event handler -- this ki value addEventListener se pehle lage hue querySelector("h1") hoti hai like yaha h1 this ki value hai
// document.querySelector("h1").addEventListener("click", function() {
//     // alert("You will be hacked")
//     console.log(this.style.color = "red")
// })



// ******* class -- this value is blank object





// ****  Manual binding ****
// let obj = {
//     name: "kamal",
//     age: 21,
// }

// function abcd() {
//     console.log(this)
// }
// // abcd()
// abcd.call(obj)

//passing the parameters ***
// let obj = {
//     name: "kamal",
//     age: 21,
// }

// function abcd(a,b,c) {
//     console.log(this,a,b,c)
// }
// abcd.call(obj, 12, 23, 15)
// Output: {name: 'kamal', age: 21} 12 23 15


// ***** apply 
// let obj = {
//     name: "kamal",
//     age: 21,
// }

// function abcd(a,b,c) {
//     console.log(this,a,b,c)
// }
// abcd.apply(obj, [12, 23, 15]) // --> we only added the square brackets here
// Output: {name: 'kamal', age: 21} 12 23 15

// let obj = {
//     name: "kamal",
//     age: 21,
// }

// function abcd(a,b,c) {
//     console.log(this,a,b,c)
// }
// // abcd.bind(obj,1,2,3)
// let fnc = abcd.bind(obj, 1,2,3)
// fnc()