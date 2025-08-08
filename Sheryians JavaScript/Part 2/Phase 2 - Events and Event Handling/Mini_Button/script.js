let btn = document.querySelector("#btn");
let filesinp = document.querySelector("#filesinp")
btn.addEventListener("click", function() {
    filesinp.click();
})

filesinp.addEventListener("change", function(dets) {
    // console.log(dets)
    // console.log(dets.target.files[0].name)
    // btn.textContent = dets.target.files[0].name;
    const file = dets.target.files[0];
    if(file) {
        btn.textContent = file.name;
    }
})