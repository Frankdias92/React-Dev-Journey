import { createBrowserRouter } from 'react-router-dom';


import { Default } from './layouts/Default.js';
import { Timeline } from './pages/Timeline.js';
import { Profile } from './pages/Profile.js';



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Timeline />
      },
      
      {
        path: '/profile',
        element: <Profile />
      }
    ]
  }
  
])