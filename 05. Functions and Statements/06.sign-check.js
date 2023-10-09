function checkSign(numOne, numTwo, numThree) {
    let counter = 0;
    let arr = [numOne, numTwo, numThree];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0){
            counter += 1;
        }
    }
    if (counter % 2 === 0) {
        console.log('Positive');
    }
    else {
        console.log('Negative');
    }
}

checkSign(5, -12, -15)