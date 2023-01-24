window.onload = async (event) => {
    const friends = await fetch('/friends').then(response => response.json())
    if (friends.length > 0) {

        const friendsTbl = document.createElement('table')
        const friendsTblHeader = document.createElement('thead')
        const friendsTblHeaderRow = document.createElement('tr')
        friendsTblHeaderRow.replaceChildren(
            makeElement('td', 'Username'),
            makeElement('td', 'Name'),
            makeElement('td', 'Email')
        )
        friendsTblHeader.appendChild(friendsTblHeaderRow)
        friendsTbl.appendChild(friendsTblHeader)

        const friendsTblBody = document.createElement('tbody')
        friendsTbl.appendChild(friendsTblBody)

        friends.forEach(friend => {
            const friendsTblRow = document.createElement('tr')
            friendsTblRow.replaceChildren(
                makeElement('td', friend.username),
                makeElement('td', friend.name),
                makeElement('td', friend.email)
            )
            friendsTblBody.appendChild(friendsTblRow)
        })

        document.getElementById('friends').replaceChildren(friendsTbl)

    }
}

const makeElement = (type, text) => {
    const element = document.createElement(type)
    element.innerText = text
    return element
}