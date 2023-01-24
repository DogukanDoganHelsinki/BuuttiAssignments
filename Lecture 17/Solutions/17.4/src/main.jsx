import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact, { loader as contactLoader } from './Contact'
import Contacts from './Contacts'
import Admin from './Admin'
import ErrorPage from './ErrorPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Contacts />,
        children: [{
            path: 'contact/:id',
            element: <Contact />,
            loader: contactLoader
        }],
        errorElement: <ErrorPage />
    },
    {
        path: '/admin',
        element: <Admin />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
