
let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit", function(dets) {
    dets.preventDefault();  // -- It stop form submission

    // console.log(inputs);
    // console.log(inputs[0].value,
    //             inputs[1].value,
    //             inputs[2].value,
    //             inputs[3].value,    
    // )
    
let card = document.createElement("div");
card.classList.add("card");

let profile = document.createElement("div");
profile.classList.add("profile");

// card.appendChild(profile);
// console.log(card)

let img = document.createElement("img");
// img.setAttribute("src", "https://images.unsplash.com/photo-1743708853398-7c47796093f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D")
img.setAttribute("src",inputs[0].value)

let h3 = document.createElement("h3")
// h3.textContent = "Eagle"
h3.textContent = inputs[1].value;

let h5 = document.createElement("h5")
// h5.textContent = "I am a King of sky"
h5.textContent = inputs[2].value

let p = document.createElement("p")
// p.textContent = "I am always fly in the sky. I am a King of sky.I am always fly in the sky. I am a King of skyI am always fly in the sky. I am a King of sky"
p.textContent = inputs[3].value



profile.appendChild(img);
card.appendChild(profile)

card.appendChild(h3)
card.appendChild(h5)
card.appendChild(p)

main.appendChild(card)

inputs.forEach(function(inp) {
    if(inp.type !== "submit") {
        inp.value = "";
    }
})
})

