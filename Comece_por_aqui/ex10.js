function inverterPalavra(Word) {
    let invert = "";
    for (let i = Word.length - 1; i >= 0; i--) {
        invert = invert + Word[i]
    } return invert
}
console.log(inverterPalavra("Pãozinho"))