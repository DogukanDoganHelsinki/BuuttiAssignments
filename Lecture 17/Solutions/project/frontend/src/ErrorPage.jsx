import { useRouteError, Link } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError()

    if (error.status === 404) return (
        <div className='ErrorPage'>
            <h1>404 - Not Found</h1>
            <p>The requested is not here</p>
            <Link to={'/'}>Main Page</Link>
        </div>
    )

    console.error(error)
    return (
        <div className='ErrorPage'>
            <h1>An Unexpected error happened!</h1>
            <p>
                {error.statusText || error.message}
            </p>
        </div>
    )
}
