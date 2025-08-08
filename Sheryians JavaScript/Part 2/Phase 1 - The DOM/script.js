// **** get element by Id   ******
// let kola = document.getElementById("hey");
// console.log(kola);

//**** get element by class  *******
// let kola = document.getElementsByClassName("beta");
// console.log(kola);

// ****** querySelector  ********
// let kola = document.querySelector("h1");
// // console.log(kola)
// console.dir(kola)

// ***** querySelectorAll ********
// let kola = document.querySelectorAll("h1");
// console.dir(kola);

// let h1 = document.querySelector("h1");
// h1.innerText = "I am a devotee of lord Rama"
// h1.textContent = "Now i am a spider man"
// h1.innerHTML = "<i> I am a student </i>"
// h1.hidden = true;
// console.dir(h1);


// ***** Attribute Manipulation

// let a = document.querySelector("a");
// a.href = "https://www.google.com"
// console.dir(a);


// ***** set attribute *******
// let a = document.querySelector("a");
// a.setAttribute("href", "https://www.youtube.com");

// ***** get attribute *******
// let a = document.querySelector("a");
// console.log(a.getAttribute("href")) \

// ***** remove attribute *******
// let a = document.querySelector("a");
// a.removeAttribute("href")


// ****** create Element ********
// let h1 = document.createElement("h1");
// console.log(h1);
// h1.innerText = "Hello ji"
// document.querySelector("body").prepend(h1);


// ****** remove Element ********
// let h1 = document.querySelector("h1");
// h1.remove();


// let h1 = document.createElement("h1");
// h1.innerText = "I am new H1";
// document.querySelector("div").append(h1);
// document.querySelector("div").prepend(h1);

// ***** Style Updates ****
// let h1 = document.querySelector("h1");
// h1.style.color = "red";
// console.dir(h1)

// let h1 = document.querySelector("h1");
// h1.classList.add("hulu")
// h1.classList.remove("hulu")
// h1.classList.toggle("hulu")


//Qs:  select all <li> elements and print their text using a loop
// let lis = document.querySelectorAll("li");
// lis.forEach(function(val) {
//     console.log(val.textContent);
// })

//Another method
// let lis = document.querySelectorAll("li");
// for(let i=0; i<lis.length; i++) {
//     console.log(lis[i].textContent)
// }


//Qs: Select a paragraph and replace its content with :
/* <b> updated </b> by JavaScript */

// let p = document.querySelector("p");
// p.innerHTML = "<b> updated </b> by JavaScript"

// let a = document.querySelector("a");
// console.log(a.href)
// console.log(a.getAttribute("href"))


//Qs: Create a new list items <li> New Task </li> and add it to the end of a <ul>
// let ul = document.querySelector("ul");
// let li = document.createElement("li")
// li.textContent = "New Task";
// ul.appendChild(li)

// let ul = document.querySelector("ul");
// let li = document.querySelector("li");
// ul.removeChild(li);


//QS:
// let li = document.querySelectorAll("ul li:nth-child(2n)");
// // console.log(li);

// li.forEach(function(val) {
//     val.classList.add("highlight")
// })

//Qs:
// let p = document.querySelectorAll("p");
// // console.log(p)
// p.forEach(function(val) {
//     val.classList.add("pillu")
//     // val.style.color = "red";
// })






// let vall = alert("You will be hacked within 2 minutes !!")

// let vall = prompt("Enter the number", "Ram")

// let agee = prompt("Enter your age")
// if(agee > 18) {
//     alert("You can drive")
// } else {
//     alert("You cannot drive")
// }