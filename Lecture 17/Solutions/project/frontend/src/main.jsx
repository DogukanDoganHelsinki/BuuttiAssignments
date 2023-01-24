import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SongBook, { loader } from './SongBook'
import ErrorPage from './ErrorPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <SongBook />
    },
    {
        path: '/:id',
        element: <SongBook />,
        loader: loader,
        errorElement: <ErrorPage />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
