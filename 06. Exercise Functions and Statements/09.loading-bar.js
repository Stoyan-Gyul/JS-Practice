function printLoadingBar(n) {
    let percentage = Math.floor(n / 10);
    let loaded = "%".repeat(percentage);
    let unloaded = ".".repeat(10 - percentage);
    if (n === 100) {
        console.log(`100% Complete!\n` + 
                    `[%%%%%%%%%%]`);
    } else {
        console.log(`${n}% [${loaded}${unloaded}]\n` +
                    `Still loading...`);
    }
}

printLoadingBar(30);