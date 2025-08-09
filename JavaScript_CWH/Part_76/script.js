async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}

// settle meand resolve or reject
// resolve meand promise has settle successfully
// reject meand promise has not settle successfully

async function main() {
    console.log("Loading modules....")

    console.log("Loading data....")

    console.log("Process Running....")

    let data = await getData();

    console.log("data")

    console.log("Task Done")

    console.log("Completed")
}

main()