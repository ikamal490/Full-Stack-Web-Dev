let ul = document.querySelector("ul");

ul.addEventListener("click", function(dets) {
    // alert("clicked")
    // console.log(dets.target)
    // dets.target.style.textDecoration = "line-through"
    // dets.target.classList.add("lt")
    dets.target.classList.toggle("lt")
})