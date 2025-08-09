
let form = document.querySelector("form");

const userManager = {
    user: [],
    init: function() {
        // alert()
        form.addEventListener("submit", function(e) {
            e.preventDefault
            console.log(this)
        })
    },
    addUser: function() {},
    removeUser: function() {},
}

userManager.init();