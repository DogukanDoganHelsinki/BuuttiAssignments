import { useState } from 'react'
import { BiTrash } from 'react-icons/bi'
import './App.css'

let uniqueId = 100

const App = () => {
    const [list, setList] = useState([])
    const [input, setInput] = useState('')

    const addItem = () => {
        if (!input) return null

        setList(list.concat({ id: uniqueId++, status: false, item: input }))
        setInput('')
    }

    const toggle = (id) => () => {
        setList(list.map(item => item.id === id ? { ...item, isDone: !item.isDone } : item))
    }

    const remove = (id) => () => {
        setList(list.filter(item => item.id !== id))
    }

    return <div className='App'>
        <input value={input} onChange={(event) => setInput(event.target.value)} />
        <button onClick={addItem}>Add</button>
        {list.map(({ id, isDone, item }) => {
            return <div key={id} className='item'>
                <span className={isDone ? 'done' : ''}
                    onClick={toggle(id)}>
                    {item}
                </span>
                <BiTrash className='icon' onClick={remove(id)} />
            </div>
        })}

    </div>
}

export default App
