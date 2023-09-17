function areDigitsSameAndSum(number) {
    let numberStr = number.toString();
    let sum = 0;
    let same = true;

    for (let i = 0; i < numberStr.length; i++) {
        if (i > 0) {
            if (numberStr[i] !== numberStr[i-1]) {
                same = false;
            }
        }
        sum += Number(numberStr[i]);
    }

    console.log(same);
    console.log(sum);
}

areDigitsSameAndSum(1234);