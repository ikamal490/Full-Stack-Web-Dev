// ******* closure  - how variables are preserved *********
// function abcd() {
//     let a = 12;
//     return function() {
//         console.log(a);
//     }
// }
// let func = abcd()
// func();


// ******* Private counter: *********
// function abcd() {
//     let c = 0;
//     return function() {
//         c++;
//         console.log(c);
//     }
// }
// // abcd()
// let fn1= abcd();
// fn1()
// fn1()
// fn1()

// let fn2 = abcd()
// fn2()
// fn2()

// **** Encapsulation ****
// function clickLimiter() {
//     let click = 0;
//     return function() {
//         if(click < 5) {
//             click++;
//             console.log(`clicked : ${click} times`)
//         }
//         else {
//             console.error("Limit Exceed")
//         }
//     }
// }

// let fnc = clickLimiter()
// fnc()
// fnc()
// fnc()
// fnc()
// fnc()
// fnc()