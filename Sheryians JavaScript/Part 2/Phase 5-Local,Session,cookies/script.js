// **** set item -- store kasie kare ******
// localStorage.setItem("name","Kamal hu ")

//***** get item -- data fetch kasie kare*****
// let val = localStorage.getItem("name")

// ***** remove item -- remove kaise kare ******
// localStorage.removeItem("name")

// ****** clear :- it will clear the data *******
// localStorage.clear()

// ***** Update kaise kare ******
// localStorage.setItem("name", "My name is lakhan")
// localStorage.setItem("name", "Updated name now kamal") //agar name nahi hai toh create kar dega, nhii toh update kar dega name ki value


// ***** session storage ****
// sessionStorage.setItem("name","kamal hu")



// ****** cookies *********
// document.cookie = "email= kamal@gmail.com"


// -- we can only store string data in local storage ***
// localStorage.setItem("friends", ["aakash","kunal","hemant","aman"])
localStorage.setItem("friends", JSON.stringify(["aakash", "amit", "shefali"])) 
// Output like:                 friends: "[\"aakash\",\"amit\",\"shefali\"]"

localStorage.getItem("friends") // '["aakash","amit","shefali"]'

JSON.parse('["aakash","amit","shefali"]')  // ['aakash', 'amit', 'shefali']

// let fr = JSON.parse(localStorage.getItem("friends"));


