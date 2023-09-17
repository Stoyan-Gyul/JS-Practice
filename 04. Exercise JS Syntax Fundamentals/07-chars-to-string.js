function charsToString(...chars){
    let str = '';
    for (let char of chars) {
        str += char;
    }
    console.log(str);
}

charsToString("a", "b", "c");