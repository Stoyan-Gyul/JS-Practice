function rotateArray(array, rotations) {
    for (let i=0; i<rotations; i++) {
        let firstElement = array.shift();
        array.push(firstElement);
    }
    console.log(array);
}

rotateArray([51, 47, 32, 61, 21], 2);