let inp = document.querySelector("input")
let span = document.querySelector("span")

inp.addEventListener("input", function() {
    // console.log(dets)
    // console.log("input hua")
    // console.log(inp.value.length)
    // console.log(dets.data)
    // span.textContent = inp.value.length;

    //--> if we want to don't wrote more than 20 words then pr add character left in HTML
    // span.textContent = 20-inp.value.length;
    let left = 20-inp.value.length;
    span.textContent = left;

    if(left < 0) {
        span.style.color = "red";
    } else { 
        span.style.color = "white"
    }

})

