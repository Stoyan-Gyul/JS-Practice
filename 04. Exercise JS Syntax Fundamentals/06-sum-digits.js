function sumDigits(number) {
    let numberStr = number.toString();
    let sum = 0;
    for (let digit of numberStr) {
        sum += Number(digit);
    }
    console.log(sum);
}

sumDigits(97561);