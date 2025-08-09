function nice(name) {
    console.log("I am good "+ name);
    console.log("I am a good man"+ name)
    console.log("I am a good woman"+ name)
    console.log("I am a good horse"+ name)
    console.log("I am a good boy"+ name)
}
nice("kamal");

function sum(a,b) {
    // console.log(a+b);
    console.log(a,b)
    return a+b;
}

result1 = sum(3);
result2 = sum(13,5);
result3 = sum(3,25);
console.log("The sum of these numbers is: ", result1);
console.log("The sum of these numbers is: ", result2);
console.log("The sum of these numbers is: ", result3);4

const func1 = (x)=>{
    console.log("I am an arrow function",x);
}

func1(32);
func1(12);
func1(53);
