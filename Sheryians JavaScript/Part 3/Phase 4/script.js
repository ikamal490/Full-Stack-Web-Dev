// console.log("Hey1")
// console.log("Hey2")
// setTimeout(() => {
//     console.log("hey3")
// }, 2000);
// console.log("Hey4")



// *** callback *****

// console.log(Math.random())
// console.log(Math.floor(Math.random()*20))  // --> 0 to 20 random values

// function timeLunga(val) {
//     setTimeout(() => {
//         console.log(val)
//     }, Math.floor(Math.random()*10)*1000);
// }

// timeLunga(12);


// function timeLunga(fnc) {
//     setTimeout(fnc, Math.floor(Math.random() * 10) * 1000)
// }
// //It is callback
// timeLunga(function() {
//     console.log("Hey")
// })


// ****** callback hell ******

// function profileLekarAao(username, cb) {
//     console.log("Fetching profile data.....")
//     setTimeout(() => {
//         // console.log(`profile fetch of ${username}`)
//         cb({_id:1212,username, age:26, email:"kamal@gmail.com"})
//     }, 2000);
// }

// function saarePostLekarAao(id, cb) {
//     console.log("Fetching all posts....")
//     setTimeout(() => {
//         cb({_id: id, posts: ["hey", "I am good", "new post"]})
//     }, 3000);
// }

// function savedPostNikaalo(id, cb) {
//     console.log("Fetching saved posts....")
//     setTimeout(() => {
//         cb({_id: id, saved: ["savedpost", "archived post", "hidden post"]})
//     }, 3000);
// }

// profileLekarAao("kamal", function(data) {
//     console.log(data)

//     saarePostLekarAao(data._id, function(posts) {
//         console.log(posts)

//         savedPostNikaalo(data._id, function(saved) {
//             console.log(saved)
//         })
//     })
// })


