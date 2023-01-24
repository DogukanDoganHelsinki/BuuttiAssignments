console.log('1')
setTimeout(() => {
    console.log('..2')
    setTimeout(() => {
        console.log('....3')
        setTimeout(() => {
            console.log('GO!')
        }, 1000)
    }, 1000)
}, 1000)