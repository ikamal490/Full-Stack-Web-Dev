console.log("This is string tutorial")

let a = "Kamal";
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]); --> undefined

console.log(a.length);
let my_name = "Kamal";
let friend_name = "Kunal";
console.log("My name is "+ my_name + " and my friend name is "+ friend_name);
console.log(`My name is ${my_name} and my friend name is ${friend_name}`);

let b = "Hemantan";
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(1,4))
console.log(b.slice(1))

console.log(b.replace("an", "66"))
console.log(b.concat(a, "Shefali"))

console.log(b.startsWith("He"))  //true
console.log(b.startsWith("he"))  //false

console.log(b.endsWith("n"))  //true
