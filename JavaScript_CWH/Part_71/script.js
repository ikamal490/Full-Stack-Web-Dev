document.querySelector(".box")
document.querySelector(".box").innerHTML
document.querySelector(".container").innerHTML
document.querySelector(".container").innerText
document.querySelector(".container").outerHTML
document.querySelector(".container").tagName //'DIV'
document.querySelector(".container").nodeName //'DIV'
//tagName -- only applicable for elements
//nodeName -- kisi bhi trah ke node ke liye applicable hota hai jaise comment node, text node

document.querySelector(".container").textContent
// '\n        Hey I am a box1\n        Hey I am a box2\n    '

document.querySelector(".container").hidden
    // false

// document.querySelector(".container").hidden = true
    // true

// document.querySelector(".container").innerHTML = "Hey i love with shefali"
    // 'Hey i love with shefali'

    
// document.querySelector(".box").innerHTML = "I love with shefali"
    // 'I love with shefali'

document.querySelector(".box").hasAttribute("style")
// true

document.querySelector(".box").getAttribute("style")
// 'display: flex;'

// document.querySelector(".box").setAttribute("style", "display: inline")
// undefined

document.querySelector(".box").attributes
// NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}

// document.querySelector(".box").removeAttribute("style")
// undefined

// **** In design Mode we can edit any website  *****
// document.designMode = "on"  
// 'on'

document.querySelector(".box").dataset
// DOMStringMap {createdby: 'kamla pasand', conceptby: 'shefali'}

// let div = document.createElement("div");
// div.innerHTML = "I have been inserted <b> by kamal </b>"
// div.setAttribute("class","created");
// document.querySelector(".container").append(div)
// document.querySelector(".container").before(div)
// document.querySelector(".container").prepend(div)
// document.querySelector(".container").after(div)

let cont = document.querySelector(".container")
// cont.insertAdjacentHTML("afterbegin", "<b> I am under the water. Please help me </b>") 
// cont.insertAdjacentHTML("afterend", "<b> I am under the water. Please help me </b>")
// cont.insertAdjacentHTML("beforebegin", "<b> I am under the water. Please help me </b>") 
// cont.insertAdjacentHTML("beforeend", "<b> I am under the water. Please help me </b>") 

document.querySelector(".container")
document.querySelector(".container").classList
// DOMTokenList(3) ['container', 'red', 'bg-green', value: 'container red bg-green']

document.querySelector(".container").className
// 'container red bg-green'

document.querySelector(".container").classList.add("KamalShefu")
// undefined

document.querySelector(".container").classList.remove("KamalShefu")
// undefined

//toggle --> khula hai toh band kar do, band hai toh khol do

document.querySelector(".container").classList.toggle("red")
// true
document.querySelector(".container").classList.toggle("red")
// false 