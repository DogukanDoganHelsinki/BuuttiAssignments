import axios from 'axios'

const todosOne = async () => {
    const todos = await axios
        .get('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.data)
    console.log(todos)
}

const todosTwo = async () => {
    const todos = await axios
        .get('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.data)

    const users = await Promise.all(todos
        .reduce((acc, cur) => acc.includes(cur.userId) ? acc : acc.concat(cur.userId), [])
        .map(userId => axios
            .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.data)
        ))

    const todosWithUserInfo = todos.map(todo => {
        const user = users.find(user => user.id === todo.userId)
        return { ...todo, user }
    })

    console.log(todosWithUserInfo)
}

const todosThree = async () => {
    const todos = await axios
        .get('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.data)

    const users = await Promise.all(todos
        .reduce((acc, cur) => acc.includes(cur.userId) ? acc : acc.concat(cur.userId), [])
        .map(userId => axios
            .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.data)
        ))


    const todosWithLimitedUserInfo = todos.map(todo => {
        const { name, username, email } = users.find(user => user.id === todo.userId)
        return { ...todo, user: { name, username, email } }
    })

    console.log(todosWithLimitedUserInfo)
}

const todosFour = async () => {
    const todos = await axios
        .get('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.data)
    const users = await axios
        .get('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.data)

    const todosWithLimitedUserInfo = todos.map(todo => {
        const { name, username, email } = users.find(user => user.id === todo.userId)
        return { ...todo, user: { name, username, email } }
    })

    console.log(todosWithLimitedUserInfo)
}


// For testing

const todos = (exercise) => {
    switch (exercise) {
        case 1: return todosOne()
        case 2: return todosTwo()
        case 3: return todosThree()
        case 4: return todosFour()
        default: return undefined
    }
}

todos(4)