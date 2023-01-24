function analyze() {
    const resultDiv = document.getElementById('result')
    const words = document.getElementById('text').value
    .replace(/\s\s+/g, ' ') // Replace all whitespaces with single space
    .replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()"“”]/g,"") // Remove punctuation
    .toLowerCase()
    .split(' ')
    console.log('done')

    const totalNumberOfWords = words.length
    const totalNumberOfWordsParagraph = document.createElement('p')
    totalNumberOfWordsParagraph.innerText = `Total number of words: ${totalNumberOfWords}`
    resultDiv.appendChild(totalNumberOfWordsParagraph)

    const averageWordLength = words.reduce((acc, cur) => acc + cur.length, 0) / totalNumberOfWords
    const averageWordLengthParagraph = document.createElement('p')
    averageWordLengthParagraph.innerText = `Average word length: ${averageWordLength}`
    resultDiv.appendChild(averageWordLengthParagraph)

    const wordCountList = document.createElement('ul')
    const wordCounts = {}
    words.forEach(word => {
        const count = wordCounts[word] || 0
        wordCounts[word] = count + 1
    })
    Object.entries(wordCounts)
        .sort((a, b) => b[1] - a[1]) // Extra 1
        .forEach(([word, count]) => {
            const item = document.createElement('li')
            item.innerText = `${word} (${count})`
            wordCountList.appendChild(item)
        })
    resultDiv.appendChild(wordCountList)
}

document.querySelector('button').onclick = analyze