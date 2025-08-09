let pr = new Promise(function(res, rej) {
    setTimeout(() => {
        let rn = Math.floor(Math.random()*10);
        if(rn > 5) res("resolve with "+ rn)
            else rej("reject with "+ rn)
    },2000)
});

async function abcd() {
    // let val = await pr
    try {
        let val = await pr;
        console.log(val);
    }
    catch (err) {
        console.log(err)
    }
}

abcd()