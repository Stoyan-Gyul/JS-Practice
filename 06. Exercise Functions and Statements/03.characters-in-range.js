function printAscendingCharactersInRange(char1, char2) {
    let maxAsciiCode = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));
    let minAsciiCode = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    let ascendingList = [];
    for (let charCode = minAsciiCode+1; charCode < maxAsciiCode; charCode++) {
        let currentChar = String.fromCharCode(charCode);
        ascendingList.push(currentChar);
    }
    console.log(...ascendingList);
}

printAscendingCharactersInRange('C', '#');