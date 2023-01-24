import { useState } from 'react'
import './App.css'

function App() {
    const [type, setType] = useState(null)
    const [feedback, setFeedback] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const submit = () => {
        console.log({ type, feedback, name, email })
    }

    const reset = () => {
        setType(null)
        setFeedback('')
        setName('')
        setEmail('')
    }

    const onRadioChange = (event) => setType(event.target.value)

    const RadioButton = ({ value }) => (
        <>
            <input type='radio'
                id={value}
                value={value}
                checked={type === value}
                onChange={onRadioChange}
            />
            <label htmlFor={value}>{value}</label>
        </>
    )

    const RadioButtons = ({ values }) => <div>
        {values.map(value => <RadioButton key={value} value={value} />)}
    </div>
    
    return (
        <div className='App'>
            <RadioButtons values={['Feedback', 'Suggestion', 'Question']} />

            <textarea value={feedback} onChange={(event) => setFeedback(event.target.value)}></textarea>
            <div>
                <label htmlFor='name'>Name</label>
                <input type='text'
                    id='name'
                    value={name}
                    onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input type='text'
                    id='email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div>
                <button onClick={submit} disabled={!type || !feedback}>Submit</button>
                <button onClick={reset}>Reset</button>
            </div>

        </div>
    )
}

export default App
