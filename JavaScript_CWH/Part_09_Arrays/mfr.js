let arr = [1,12,5,11,15]

// let newArr = []
// for(let i=0; i<arr.length; i++) {
//     const element = arr[i]
//     newArr.push(element ** 2)
// }
// console.log(newArr)

let newArr = arr.map((e)=>{
    return e**2
}) 
console.log(newArr)

const greaterThanSeven = (e)=>{
    if(e>7) {
        return true
    } 
    return false
}
console.log(arr.filter(greaterThanSeven)) 


//It help for finding the factorial value
let arr2 = [1,2,3,4,5]

const red = (a,b)=>{
    return a*b
}
console.log(arr2.reduce(red))

Array.from("kamal")