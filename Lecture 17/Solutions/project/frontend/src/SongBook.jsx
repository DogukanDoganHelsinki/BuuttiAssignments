import { useState, useEffect } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import './SongBook.css'

export function loader({ params }) {
    return params
}

const notFound404 = { id: 0, title: 'Not Found (404)', lyrics: 'The song you are looking for could not be found :(' }

function SongBook() {
    const params = useLoaderData()
    const [songs, setSongs] = useState([])
    const [selected, setSelected] = useState({})
    const [search, setSearch] = useState('')

    useEffect(() => {
        initialize()
    }, [])

    useEffect(() => {
        setSong(params, songs)
    }, [params])

    const initialize = async () => {
        const response = await fetch('/songs')
        const songs = await response.json()
        setSongs(songs)
        setSong(params, songs)
    }

    const setSong = async (params, songs) => {
        if (!params || !songs) return undefined

        const id = Number(params?.id)
        let selectedSong = songs.find(song => song.id === id)

        if (!selectedSong) {
            setSelected(notFound404)
            return
        }

        if (!selectedSong.lyrics) {
            const response = await fetch('/songs/' + id)
            selectedSong  = await response.json()
            setSongs(songs.map(song => song.id === id ? selectedSong : song))
        }
        setSelected(selectedSong)
    }

    const Heading = () => <h1><Link to='/'>SongBook</Link></h1>

    const SongList = () => (
        <div className='SongList'>
            <input onChange={(event) => setSearch(event.target.value)} />
            <ul>
                {songs
                    .filter(song => song.title.toLowerCase().includes(search.toLowerCase()))
                    .map(({ id, title }) => {
                        const classes = selected.id === id ? 'selected' : ''
                        return <li key={id} className={classes}>
                            <Link to={`/${id}`}>
                                {title}
                            </Link>
                        </li>
                    })
                }
            </ul>

        </div>
    )

    const SongView = () => {
        if (!params) return null

        return (
            <div className='SongView'>
                <h2>{selected.title}</h2>
                <pre>{selected.lyrics}</pre>
            </div>
        )
    }

    return (
        <div className={params ? 'SongBook' : 'SongBook frontpage'}>
            <Heading />
            <SongList />
            <SongView />
        </div>
    )
}

export default SongBook
