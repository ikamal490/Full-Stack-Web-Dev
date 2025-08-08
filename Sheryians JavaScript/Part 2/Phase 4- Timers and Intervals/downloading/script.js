let progress = document.querySelector(".progress-bar")
let count = 0;
let statext = document.querySelector("#status-text");
let intv = setInterval(function() {
    if(count < 100) {
        count++;
        progress.style.width = `${count}%`
        statext.textContent = `${count}%`
    } 
    else {
        document.querySelector("h2").textContent = "Downloaded"
        clearInterval(intv)
    }
},5000 / 100)

