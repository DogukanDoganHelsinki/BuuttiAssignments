const generateCredentials = (firstName, lastName) => {
    const currentYearShort = (new Date()).getFullYear().toString().substring(2, 4)
    const username = 'B' +
        currentYearShort +
        lastName.substring(0, 2).toLowerCase() +
        firstName.substring(0, 2).toLowerCase()
    const password = random('letter') +
        firstName.substring(0, 1).toLowerCase() +
        lastName.substring(lastName.length - 1).toUpperCase() +
        random('special') +
        currentYearShort

    return [username, password]
}

const randomIndex = (min, max) => Math.floor(Math.random() * (max - min)) + min

const random = (type) => {
    if (type === 'letter') return String.fromCharCode(randomIndex(65, 90))
    if (type === 'special') return String.fromCharCode(randomIndex(33, 47))
}

console.log(generateCredentials('John', 'Doe'))