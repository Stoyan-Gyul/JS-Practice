function findLargestNumber(num1, num2, num3) {
    let largestNumber;

    if (num1 >= num2) {
        if (num1 >= num3) {
            largestNumber = num1;
        }
        else {
            largestNumber = num3;
        }
    }
    else if (num2 >= num3) {
        largestNumber = num2;
    }
    else {
        largestNumber = num3
    }

    console.log(`The largest number is ${largestNumber}.`);
}

findLargestNumber(1, 1, 3)