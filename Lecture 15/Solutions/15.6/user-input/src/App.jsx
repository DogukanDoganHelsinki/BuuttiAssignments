import { useState } from 'react'

function App() {
    const [userText, setUserText] = useState('')
    const [input, setInput] = useState('')

    const onInputChange = (event) => {
        setInput(event.target.value)
    }

    const onBtnClick = () => {
        setUserText(input)
    }
    
    return <div className='App'>
        <h1>Your string is: {userText}</h1>
        <input value={input} onChange={onInputChange} />
        <button onClick={onBtnClick}>Submit</button>
    </div>
}

export default App