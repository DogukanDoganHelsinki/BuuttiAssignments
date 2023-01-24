import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact, { loader as contactLoader } from './Contact'
import Contacts from './Contacts'
import Admin from './Admin'

const router = createBrowserRouter([
    {
        path: '/contact',
        element: <Contacts />,
        children: [{
            path: ':id',
            element: <Contact />,
            loader: contactLoader
        }]
    },
    {
        path: '/admin',
        element: <Admin />,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
