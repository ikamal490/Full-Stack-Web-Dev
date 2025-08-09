class User {
    constructor(name, address, username, email) {
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        // this.role = role;
        this.role = "user";
    }

    write(text) {
        let h1 = document.createElement("h1")
        h1.textContent = `${this.name} : ${text} `;
        document.body.appendChild(h1)
    }
}

class Admin extends User {
    constructor(name, address, username, email) {
        super(name, address, username, email);
        this.role = "admin";
    }

    remove() {
        document.querySelectorAll("h1").forEach(function(elem) {
            elem.remove()
        })
    }
}

let user1 = new User("Kamal","Jaipur", "ikamal490", "kamal@gmail.com")
let user2 = new User("Than","Bhopal", "than45", "than12@gmail.com")
let admin = new Admin("admin", "India", "notmention", "admin@1212" )
