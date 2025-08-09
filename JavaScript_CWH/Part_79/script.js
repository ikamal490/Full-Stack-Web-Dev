let a = prompt("Enter first number")

let b = prompt("Enter second number")

let sum = parseInt(a)+ parseInt(b);

if(isNaN(a) || isNaN(b)) {
    throw SyntaxError("sorry this is not allowed")
}

function main() {
    let x = 1
    try {
        console.log("The sum is "+sum*x)
        return true
        
} catch (error) {
    console.log("Error aa gya bhai")
    return false
}
    // console.log("files are being closed and db connection is being closed")

finally {
    console.log("files are being closed and db connection is being closed")
}
}

/*
Use of finally --
finally properly work in the function, when we return early then fucntion not return more below lines of codes, 
but if we use of finally it will executed. That's the use of finally
*/

let c = main();