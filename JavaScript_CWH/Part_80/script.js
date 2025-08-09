let obj = {
    a: 1,
    b: "Kamal"
}

console.log(obj)

let animal = {
    eats: true
};

let rabbit = {
    jump: true
};

rabbit.__proto__ = animal; //sets rabbit.[[Prototype]] = animal

class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is created...")
    }

    eats() {
        console.log("Khaa raha huu")
    }

    jumps() {
        console.log("Khood rha hu")
    }
}

let a = new Animal("Bunny");
console.log(a)