// fetch("https://randomuser.me/api/#")
// .then((rawdata) => {
//     console.log(rawdata)
// })
// .catch((err) => {
//     console.log(err)
// })


// fetch("https://randomuser.me/api/#")
// .then((rawdata) => {
//     return rawdata.json()
// })
// .then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log(err)
// })

// ** above code in short form **
// fetch("https://randomuser.me/api/?results=3")
// .then((raw) => raw.json() )
// .then((data) => console.log(data.results))



// ******* Project ***

fetch("https://randomuser.me/api/?results=3")
.then((raw) => raw.json() )
.then((data) => {
    data.results.forEach(function(user) {
        console.log(user.name)
    })
})
