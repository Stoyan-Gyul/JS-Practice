function sortNumbers(arr) {
    const ascendingArray = arr.sort((a, b) => a - b);
    const sortedNumbers = [];

    for (let i = 0; sortedNumbers.length < arr.length; i++) {
        let left = ascendingArray[i];
        let right = ascendingArray[arr.length - (i + 1)];
        sortedNumbers.push(left);
        if (sortedNumbers.length < arr.length) {
            sortedNumbers.push(right);
        }

    }

    console.log(sortedNumbers);
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, 3, 18, 56]);