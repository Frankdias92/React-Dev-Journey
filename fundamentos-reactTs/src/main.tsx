import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from './routes/root.js';
import { Profile } from './components/Profile.js';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/profile',
    element: <Profile />
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
