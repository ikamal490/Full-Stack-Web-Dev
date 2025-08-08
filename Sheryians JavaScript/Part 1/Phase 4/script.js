//Switch Case:

switch(4) {
    case 1:
        console.log("I am Harry");
        break;
    case 2:
        console.log("I am kamal");
        break;
    case 3:
        console.log("I am shefali");
        break;
    default:
        console.log("I am default")
}

function getGrade(score) {
    if(score >= 90 && score <= 100){
        console.log("A+");
    }
    else if (score >= 80 && score <= 89) {
        console.log("A");
    } 
    else if(score >= 70 && score <= 79) {
        console.log("B");
    }
    else if(score >= 60 && score <= 69) {
        console.log("C");
    }
    else if(score >= 33 && score <= 59) {
        console.log("D");
    }
    else if(score >= 0 && score <= 32) {
        console.log("Fail");
    }
    else {
        console.log("Invalid Number");
    }
}
console.log((getGrade(-23)));

//Rock Paper Scissor 
function rps(user , computer) {
    if(user === "rock" && computer === "scissor") return "user win";
    if(user === "paper" && computer === "scissor") return "computer win";
    if(user === "scissor" && computer === "scissor") return "Draw";

    if(user === "rock" && computer === "rock") return "Draw";
    if(user === "paper" && computer === "rock") return "user win";
    if(user === "scissor" && computer === "rock") return "computer win";

    if(user === "rock" && computer === "paper") return "computer win";
    if(user === "paper" && computer === "paper") return "Draw";
    if(user === "scissor" && computer === "paper") return "user win";
}
console.log((rps("paper", "scissor")))

//Another way Rock Paper Scissor
function ropasc(user, computer) {
    if(user === computer) return "Drawn"

    if(user === "paper" && computer === "rock")  return "user win"
    if(user === "scissor" && computer === "paper") return "user win"
    if(user === "rock" && computer === "scissor") return "user win"

    return "compute win"
}
console.log((ropasc("rock", "scissor")))
