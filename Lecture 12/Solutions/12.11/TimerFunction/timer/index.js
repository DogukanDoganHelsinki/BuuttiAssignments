const axios = require('axios')

module.exports = async function (context) {
    const response1 = await axios.get('https://api.namefake.com')
    const { username, name, email_u, email_d } = response1.data
    const user = { username, name, email: `${email_u}@${email_d}` }

    const response2 = await axios.post('https://jsc-friends-server-1.azurewebsites.net/friends', user)
    context.log(response2)
}