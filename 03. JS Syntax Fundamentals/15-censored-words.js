function censorText(text, word) {
    let censoredWord = "*".repeat(word.length)

    while (text.includes(word)) {
        text = text.replace(word, censoredWord);
    }

    console.log(text);
}

censorText('A small sentence with some words', 'small');