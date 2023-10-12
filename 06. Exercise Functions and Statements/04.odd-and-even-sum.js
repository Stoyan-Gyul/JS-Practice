function printOddAndEvenSums(num){
    let oddSum = 0;
    let evenSum = 0;
    while (num > 0){
        let nextDigit = num % 10;
        if (nextDigit % 2 === 0) {
            evenSum += nextDigit;
        }
        else {
            oddSum += nextDigit;
        }
        num = Math.floor(num / 10);
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

printOddAndEvenSums(3495892137259234);