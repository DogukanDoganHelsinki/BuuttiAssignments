import { useState } from 'react'
import './App.css'

function App() {
    const [input, setInput] = useState('')
    const [list, setList] = useState([])

    const addItem = () => {
        setList(list.concat(input))
        setInput('')
    }

    const removeItem = (index) => {
        setList(list.filter((_item, i) => i !== index))
    }

    return (
        <div className='App'>
            {list.map((item, i) => {
                return <div key={i + item} onClick={() => removeItem(i)}>{item}</div>
            })}

            <input value={input} onChange={(event) => setInput(event.target.value)} />
            <button onClick={addItem}>Add</button>
        </div>
    )
}

export default App
