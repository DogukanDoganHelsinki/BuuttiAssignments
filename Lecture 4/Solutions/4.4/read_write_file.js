import fs from 'fs'

// Since fs uses relative paths, this script needs to be executed from the folder containing this file
const readStream = fs.createReadStream('./text.txt', 'utf-8')
const writeStream = fs.createWriteStream('./alteredText.txt', 'utf-8')

readStream.on('data', txt => {
    const alteredText = txt.replaceAll('joulu', 'kinkku')
        .replaceAll('Joulu', 'Kinkku')
        .replaceAll('lapsilla', 'poroilla')
        .replaceAll('Lapsilla', 'Poroilla')
    console.log(alteredText)
    writeStream.write(alteredText, error => {
        if (error) console.error(error)
    })
})

