function calcFactorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * calcFactorial(n - 1);
    }
}

function printDivisionOfFactorials(num1, num2) {
    let fact1 = calcFactorial(num1);
    let fact2 = calcFactorial(num2);
    result = (fact1 / fact2).toFixed(2);
    console.log(result);
}

printDivisionOfFactorials(6, 2);