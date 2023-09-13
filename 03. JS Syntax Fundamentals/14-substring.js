function printSubstring(string, startIndex, count) {
    slicedString = string.slice(startIndex, count+1);
    console.log(slicedString);
}

printSubstring('SkipWord', 4, 7);