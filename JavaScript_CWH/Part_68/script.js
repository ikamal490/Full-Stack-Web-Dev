console.log("Hello world")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[0].style.backgroundColor = "yellow"

// document.getElementById("red").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green"

console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "green"
})


document.getElementsByTagName("div")