// let p = document.querySelector("p");
// p.addEventListener("click", function() {
//     p.style.color = "red"
// })

// let p = document.querySelector("p");
// p.addEventListener("dblclick", function() {
//     p.style.color = "yellow"
// })


// ***** remove event listner ****
// let p = document.querySelector("p");
// function dblclick() {
//     p.style.color = "purple"
// }
// p.addEventListener("dblclick", dblclick)

// p.removeEventListener("dblclick", dblclick);


// **** Common events *****

// - Click
// let p = document.querySelector("p");
// p.addEventListener("click", function() {
//     p.style.color = "yellow"
// })


// - input:
// let input = document.querySelector("input");
// input.addEventListener("input", function() {
//     console.log("You Hacked")
// })

// let inp = document.querySelector("input");
// inp.addEventListener("input", function(evt) {
//     // console.log(evt.data)
//     //--> if we enter backspace than it will not print 'null'
//     if(evt.data !== null) {
//         console.log(evt.data)
//     }
// })


// let sel = document.querySelector("select");
// sel.addEventListener("change", function(dets) {
//     // console.log(dets)
//     // console.log(dets.target.value)
//     // device.textContent = "Device Selected"
//     device.textContent = `${dets.target.value} selected`
// })

// let device = document.querySelector("#device");


// let h1 = document.querySelector("h1");
// window.addEventListener("keydown", function(dets) {
//     // console.log(dets)
//     // console.log(dets.key)
//     if(dets.key === " ") {
//         h1.textContent = "Spc"
//     } else {
//     h1.textContent = dets.key;
//     }
// })


// let btn = document.querySelector("#btn");
// let filesinp = document.querySelector("#filesinp")
// btn.addEventListener("click", function() {
//     filesinp.click();
// })

// filesinp.addEventListener("change", function(dets) {
//     // console.log(dets)
//     // console.log(dets.target.files[0].name)
//     // btn.textContent = dets.target.files[0].name  //if we select any img then again we try to select to another then we did cancel it shows an error on console
//     const file = dets.target.files[0];
//     if(file) {
//         btn.textContent = file.name;
//     }
// })


// ******** Creating of card mini project ***********


// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let main = document.querySelector("#main");

// form.addEventListener("submit", function(dets) {
//     dets.preventDefault();  // -- It stop form submission

//     // console.log(inputs);
//     // console.log(inputs[0].value,
//     //             inputs[1].value,
//     //             inputs[2].value,
//     //             inputs[3].value,    
//     // )
    
// let card = document.createElement("div");
// card.classList.add("card");

// let profile = document.createElement("div");
// profile.classList.add("profile");

// // card.appendChild(profile);
// // console.log(card)

// let img = document.createElement("img");
// // img.setAttribute("src", "https://images.unsplash.com/photo-1743708853398-7c47796093f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D")
// img.setAttribute("src",inputs[0].value)

// let h3 = document.createElement("h3")
// // h3.textContent = "Eagle"
// h3.textContent = inputs[1].value;

// let h5 = document.createElement("h5")
// // h5.textContent = "I am a King of sky"
// h5.textContent = inputs[2].value

// let p = document.createElement("p")
// // p.textContent = "I am always fly in the sky. I am a King of sky.I am always fly in the sky. I am a King of skyI am always fly in the sky. I am a King of sky"
// p.textContent = inputs[3].value



// profile.appendChild(img);
// card.appendChild(profile)

// card.appendChild(h3)
// card.appendChild(h5)
// card.appendChild(p)

// main.appendChild(card)

// inputs.forEach(function(inp) {
//     if(inp.type !== "submit") {
//         inp.value = "";
//     }
// })
// })




// ******* mouseover ********

// let abcd = document.querySelector("#abcd");
// abcd.addEventListener("mouseover", function() {
//     abcd.style.backgroundColor = "blue"
// })
// abcd.addEventListener("mouseout", function() {
//     abcd.style.backgroundColor = "red"
// })


// let abcd = document.querySelector("#abcd");
// window.addEventListener("mousemove", function(dets) {
//     // console.log(dets)

//     // console.log(dets.clientX, dets.clientY)
//     abcd.style.top = dets.clientY + "px";
//     abcd.style.left = dets.clientX + "px";
// })


// let abcd = document.querySelector("#abcd")
// abcd.addEventListener("click", function(dets) {
//     console.log(dets)
// })



// ******Event Bubbling ******
// document.querySelector("#nav").addEventListener("click",function() {
//     alert("clicked")
// })

// ****Event Capturing ******
// let a = document.querySelector(".a")
// let b = document.querySelector(".b")
// let c = document.querySelector(".c")
// let btn = document.querySelector("button")

// btn.addEventListener("click", function() {
//     console.log("button clicked")
// })

// c.addEventListener("click", function() {
//     console.log("c clicked")
// },true)

// b.addEventListener("click", function() {
//     console.log("b clicked")
// })

// a.addEventListener("click", function() {
//     console.log("a clicked")
// }, true)  // --> we turn on capture phase


