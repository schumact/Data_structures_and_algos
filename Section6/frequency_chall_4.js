function areThereDuplicates() {
    let argArray = [];
    let obj = {};
    for (let arg of arguments) {
        argArray.push(arg);
        obj[arg] = (obj[arg] || 0) + 1;
    }

    for (let key in obj) {
        if (obj[key] > 1) {
            console.log(`${key} is in obj ${obj[key]} times`);
        }
    }
}
