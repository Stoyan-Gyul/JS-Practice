function substractOddFromEven(...array) {
    let evenNumbersSum = 0;
    let oddNumbersSum = 0;

    for (let el of array) {
        if (el % 2 === 0) {
            evenNumbersSum += el;
        }
        else {
            oddNumbersSum += el;
        }
    }
    console.log(evenNumbersSum - oddNumbersSum);
}

substractOddFromEven(1,2,3,4,5,6);