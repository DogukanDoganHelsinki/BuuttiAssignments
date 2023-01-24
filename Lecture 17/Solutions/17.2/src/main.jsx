import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact, { loader as contactLoader } from './Contact'
import Admin from './Admin'

const router = createBrowserRouter([
    {
      path: '/contact/:id',
      element: <Contact />,
      loader: contactLoader
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
