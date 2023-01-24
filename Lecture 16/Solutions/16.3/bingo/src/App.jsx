import { useState } from 'react'
import './App.css'

/* There is a bug here, can you find what it is? */
const App = () => {
    const [numbers, setNumbers] = useState([])

    const random = () => Math.floor(Math.random() * 99) + 1

    const addNumber = () => {
        let randomNumber = random()
        while (numbers.includes(randomNumber)) {
            randomNumber = random()
        }
        setNumbers(numbers => [randomNumber].concat(numbers))
    }

    return <div className='App'>
        <h1>Bingo</h1>
        <button onClick={addNumber}>Play!</button>
        <button onClick={() => setNumbers([])}>Reset</button>
        {numbers.map(number => <div key={number} className='number'>{number}</div>)}
    </div>
}

export default App
