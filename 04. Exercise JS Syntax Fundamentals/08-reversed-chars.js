function reverseCharsToString(...chars){
    let reversedArray = chars.reverse();
    let str = '';
    for (let char of reversedArray) {
        str += char + " ";
    }
    console.log(str.trimEnd());
}

reverseCharsToString("a", "b", "c");