let button = document.getElementById("btn")

button.addEventListener("dblclick", () => {
    // alert("I was clicked, Yayy!")
    document.querySelector(".box").innerHTML = "<b> Yayy you are clicked </b> Enjoyed your click!"
})