function calculate(num1, num2, operator) {
    const operation = {
        multiply: num1 * num2,
        divide: num1 / num2, 
        add: num1 + num2,
        subtract: num1 - num2
    }

    let calculation = operation[operator];
    console.log(calculation);
}

calculate(8, 4, "subtract");