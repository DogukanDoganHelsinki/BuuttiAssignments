const balance = 100
const isActive = true
const checkBalance = false

if (checkBalance) {
    if (isActive && balance > 0) {
        console.log(balance)
    } else {
        if (!isActive) {
            console.log('Your account is not active')
        } else {
            if (balance === 0) {
                console.log('Your account is empty')
            } else {
                console.log('Your balance is negative')
            }
        }
    }

} else {
    console.log('Have a nice day!')
}