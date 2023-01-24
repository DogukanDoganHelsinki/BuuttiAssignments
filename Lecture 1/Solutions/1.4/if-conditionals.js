const playerCount = 4

if (playerCount === 4) {
    console.log('The game of hearts can be played')
} else {
    console.log('The game of hearts can not be played')
}

const isStressed = true
const hasIceCream = false

if (!isStressed || hasIceCream) {
    console.log('Mark is happy')
} else {
    console.log('Mark is not happy')
}

const sunIsShining = true
const isRaining = true
const temperature = 22

if (sunIsShining && !isRaining && temperature >= 20) {
    console.log('It is a beach day')
} else {
    console.log('It is not a beach day')
}

const arinSeesSuzy = false
const arinSeesDan = true
const weekday = 'Tuesday'

if (weekday === 'Tuesday' && ((arinSeesDan && !arinSeesSuzy) || (arinSeesSuzy && !arinSeesDan))) {
    console.log('Arin is happy')
} else {
    console.log('Arin is not happy')
}