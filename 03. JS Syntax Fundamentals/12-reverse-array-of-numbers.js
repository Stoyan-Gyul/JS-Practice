function reverseArray(n, ...array) {
    let arr = [];
    for (let index = 0; index < n; index++) {
        arr.push(array[index]);
    }

    let output = ""
    for (let i=arr.length-1; i>=0; i--) {
        output += arr[i] + " ";
    }
    console.log(output.trim());
}

reverseArray(4, -1, 20, 99, 5);