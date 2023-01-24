/*
Create a program that takes in a number from commandline that
represents month of the year. Use console.log to show how many
days there are in the given month number.
*/

const month = Number(process.argv[2])

switch (month) {
    case 2:
        console.log('28 days')
        break
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log('31 days')
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log('30 days')
        break
    default:
        console.log('no such month')
}
