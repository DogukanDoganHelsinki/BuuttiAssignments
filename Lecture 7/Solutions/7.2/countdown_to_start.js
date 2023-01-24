// const delay = (time) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve()
//     }, time)
// })

// console.log('1')
// delay(1000)
//     .then(() => {
//         console.log('..2')
//         return delay(1000)
//     })
//     .then(() => {
//         console.log('....3')
//         return delay(1000)
//     })
//     .then(() => {
//         console.log('GO!')
//     })


console.log('1')
new Promise((resolve, _reject) => {
    setTimeout(() => {
        console.log('..2')
        resolve()
    }, 1000)
})
.then(() => {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            console.log('....3')
            resolve()
        }, 1000)
    })
})
.then(() => {
    setTimeout(() => {
        console.log('GO')
    }, 1000)
})