function calcCircleArea(circleRadius) {
    let circleArea;
    let inputType = typeof(circleRadius)

    if (inputType !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
    else {
        circleArea = (circleRadius ** 2) * Math.PI;
        console.log(circleArea.toFixed(2));
    }
}

calcCircleArea(5);
