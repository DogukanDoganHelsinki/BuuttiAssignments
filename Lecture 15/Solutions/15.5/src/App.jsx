import { useState } from 'react'
import './App.css'

function App() {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const [counter3, setCounter3] = useState(0)

    const increase = (counter) => {
        if (counter === 1) return () => setCounter1(counter1 + 1)
        if (counter === 2) return () => setCounter2(counter2 + 1)
        if (counter === 3) return () => setCounter3(counter3 + 1)
    }

    return (
        <div className='App'>
            <button onClick={increase(1)}>{counter1}</button>
            <button onClick={increase(2)}>{counter2}</button>
            <button onClick={increase(3)}>{counter3}</button>
            <div>{counter1 + counter2 + counter3}</div>

        </div>
    )
}

export default App
