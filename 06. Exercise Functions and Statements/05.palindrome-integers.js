function isPalindrome(arr) {
    for (let i = 0; i < arr.length; i++) {
        let numString = arr[i].toString();
        console.log(numString.split("").reverse().join("") == numString);
    }
}

isPalindrome([123,323,421,121]);