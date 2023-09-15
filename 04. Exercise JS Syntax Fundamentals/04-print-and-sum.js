function printSequence(start, end) {
    let sequence = [];
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sequence.push(i);
        sum += i;
    }

    console.log(...sequence);
    console.log(`Sum: ${sum}`);
}

printSequence(0, 26);