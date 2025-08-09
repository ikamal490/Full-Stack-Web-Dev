let pr = new Promise(function(res, rej) {
    setTimeout(() => {
        let rn = Math.floor(Math.random()*10);
        if(rn > 5) res("resolve with "+ rn)
            else rej("reject with "+ rn)
    },2000)
});

        // --> we don't handle the panding
pr
.then(function(val) {  // --> pr jab bhi resolve hua toh then chalega
    console.log(val)
})
.catch(function(val) {  // --> pr jab bhi reject hua toh catch chalega
    console.log(val)
})