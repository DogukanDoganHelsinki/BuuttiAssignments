import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

const serviceUrl = 'https://cataas.com'

function App() {
    const [imageUrl, setImageUrl] = useState('')
    const [text, setText] = useState('')

    useEffect(() => {
        getCatPic()
    }, [])

    const getCatPic = async () => {
    
        const url = text === ''
            ? serviceUrl + '/cat?json=true'
            : serviceUrl + '/cat/says/' + text + '?json=true'
        const response = await axios.get(url)
        setImageUrl(serviceUrl + response.data.url)
    }

    const onTextChange = (event) => setText(event.target.value)

    return <div className='App'>
        <img src={imageUrl} />
        <input type='text' value={text} onChange={onTextChange} />
        <button onClick={getCatPic}>Reload</button>
    </div>
}

export default App
