console.log("I am a tutorial on Loops");

let a = 1;
console.log(a);
console.log(a+1);
console.log(a+2);
console.log(a+3);


    //For Loop

for(let i=0; i<=10; i++) {
    console.log(i); 
}

let obj = {
    name: "kamal",
    role: "Programmer",
    company: "ReplaceHumans"
}

    //For-in Loop

for (const key in obj) {
        const element = obj[key];
        console.log(key,element);
}

    //For-of Loop

for (const c of "Kamal") {
    console.log(c);
}


    //while loop

let i = 0;
while(i<6) {
    console.log(i)
    i++;
}


    //Do-while loop

let p = 10;
do {
    console.log(p);
    p++;
} while (p<0);