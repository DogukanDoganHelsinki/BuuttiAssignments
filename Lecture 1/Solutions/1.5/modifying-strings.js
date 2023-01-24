let string = process.argv[2]
if (string === undefined) string = ''

/* EXTRA */
// if (string !== string.trim()) {
//     return console.log('Invalid string: surrounding whitespace')
// }

// if (string.length > 20) {
//     return console.error('Invalid string: exceeding maximum length (20)')
// }

// const firstLetter = string.charAt(0)
// if (firstLetter.toLowerCase() !== firstLetter) {
//     return console.error('Invalid string: starts with a capital letter')
// }

string = string.trim()
string = string.substring(0,20)
string = string.charAt(0).toLowerCase() + string.substring(1)

console.log(string)

