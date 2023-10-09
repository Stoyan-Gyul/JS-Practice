let sum = (a, b) => a + b;
let subtract = (a, b) => a - b;

function addAndSubtract(num1, num2, num3) {
    let result = subtract(sum(num1, num2), num3);
    console.log(result)
}

addAndSubtract(23, 6, 10);