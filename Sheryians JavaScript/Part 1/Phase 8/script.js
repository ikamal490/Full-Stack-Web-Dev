// let obj = {
//     name: "Kamal",
//     age: 26,
//     email: "Kdhakad12@gmail.com",
// }

// let aa = "name";
// obj[aa];



// const user = {
//     name: "Kamal",
//     address: {
//         city: "Bhopal",
//         pin: 462001,
//         location: {
//             lat: 23.2,
//             lng: 77.8,
//         },
//     },
// };

// user.name;
// user.address;
// user.address.city;
// user.address.pin;
// user.address.location;
// user.address.location.lat;
// user.address.location.lng;

 //Object destructring
// let {lat, lng} = user.address.location;

// for(let key in obj) {
    // console.log(key); 
    // console.log(obj[key]);
    // console.log(key, obj[key]);
// }

let role = "admin";

let obj1 = {
    name: "Kamal",
    age: 26,
    email: "Kdhakad12@gmail.com",
    address: {
        city: "Jaipur",
    },
    [role]: "Kamal Bhai",
};

// Object.keys(obj1);   
// Object.entries(obj1);

//** Spread 
// let obj2 = {...obj1};
// obj2.address.city = "Indore"; //--> this will change in both if we are using of spread 

//Deep Clone