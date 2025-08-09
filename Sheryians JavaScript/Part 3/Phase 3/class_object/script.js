class CreatePencil {
    constructor(name, company, price, color) {
        this.name = name;
        this.company = company
        this.price = price
        this.color = color
    }

    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1)
    }

    
    // erase() {
    //     document.body.querySelectorAll("h1").forEach(function (elem) {
    //         elem.remove();
    //     })
    // }

       erase() {
        document.body.querySelectorAll("h1").forEach((elem) => {
            if(elem.style.color === this.color) {
                elem.remove();
            }
        })  // --> using of this p1.erase() or p2.erase() remove the specific color
    }
}

let p1 = new CreatePencil("Nataraj", "nataraj", 10, "yellow")
let p2 = new CreatePencil("Apsara", "apsara", 15, "blue")