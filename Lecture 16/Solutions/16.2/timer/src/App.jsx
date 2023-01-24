import { useState, useEffect } from 'react'


const App = () => {
    const [isActive, setIsActive] = useState(false)
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)

    useEffect(() => {
        if (isActive) {
            const timeout = setTimeout(addSecond, 1000)
            return () => clearTimeout(timeout)
        }
    }, [isActive, seconds])

    const startStop = () => setIsActive(!isActive)

    const addSecond = () => {
        if (seconds === 59) {
            setSeconds(0)
            setMinutes(minutes + 1)
        } else {
            setSeconds(seconds + 1)
        }
    }

    const addMinute = () => setMinutes(minutes + 1)
    const reset = () => {
        setSeconds(0)
        setMinutes(0)
    }

    return <div className='App'>
        <h1>Timer</h1>
        <h1>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</h1>
        <button onClick={startStop}>Start/Stop</button>
        <button onClick={addMinute}>Add a Minute</button>
        <button onClick={addSecond}>Add a Second</button>
        <button onClick={reset}>Reset</button>
    </div>
}

export default App
