function printEveryNthElement(array, N) {
    let output = [];
    for (let i = 0; i < array.length; i+=N) {
        output.push(array[i]);
    }
    console.log(output);
}

printEveryNthElement(['5', '20', '31', '4', '20'], 2);