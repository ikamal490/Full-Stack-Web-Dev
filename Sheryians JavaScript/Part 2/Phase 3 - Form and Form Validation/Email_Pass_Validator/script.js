let email = document.querySelector("#email")
let password = document.querySelector("#password")
let form = document.querySelector("form")

form.addEventListener("submit", function(dets) {
    dets.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    let emailans = emailRegex.test(email.value)
    let passans = passwordRegex.test(password.value)

    let isValid = true;

    if(!emailans) {
        document.querySelector("#email-error").textContent = "Email is incorrect"
        isValid = false;
    }

    if(!passans) {
        document.querySelector("#password-error").textContent = "Password is incorrect"
        isValid = false;
    }

    document.querySelector("#resultMessage").textContent = "Everything is correct"
})