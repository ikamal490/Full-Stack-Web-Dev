// function CreateBiscuits() {
//     this.name = "ParleG"
//     this.price = 5;
//     this.qty = 8;
//     this.company = "Parle";
//     this.category = "regular"
// }


// function CreateBiscuits(name, price, qty, company, category) {
//     this.name = name
//     this.price = price;
//     this.qty = qty;
//     this.company = company;
//     this.category = category;
// }

// let biscuit1 = new CreateBiscuits("sunfeast",10, 8, "cadbury", "regular" ); 
// let biscuit2 = new CreateBiscuits("oreo",40, 5, "Parle", "Rare" ); 


// function CreatePencil(name, price, color, company) {
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     this.company = company;
//     this.write = function(text) {
//         let h1 = document.createElement("h1");
//         // h1.textContent = "Hey How Are You";
//         h1.textContent = text;
//         h1.style.color = color;
//         document.body.append(h1);   
//     }
// }

// let pencil1 = new CreatePencil("Nataraj", 10, "red", "woodland")
// let pencil2 = new CreatePencil("Doms", 20, "black", "doms")


// ***** prototype ****
// function CreatePencil(name, price, color) {
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     this.write = function(text) {
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = color;
//         document.body.append(h1);   
//     }
// }
// CreatePencil.prototype.company = "Apni Pencil"
// let pencil1 = new CreatePencil("Nataraj", 10, "red")
// let pencil2 = new CreatePencil("Doms", 20, "black")


// function CreatePencil(name, price, color, company) {
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     this.company = company;
// }
// CreatePencil.prototype.write = function(text) {
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = this.color;
//         document.body.append(h1);   
//     }

// let pencil1 = new CreatePencil("Nataraj", 10, "red", "woodland")
// let pencil2 = new CreatePencil("Doms", 20, "black", "doms")


// ****** prototypal inheritance ******
let coffee = {
    color: "dark",
    drink: function() {
        console.log("gut gut gut")
    },
}

let cuttingCoffee  = Object.create(coffee)
console.log(cuttingCoffee)
cuttingCoffee.drink()