import { router } from './routers'
import { RouterProvider } from 'react-router-dom'

import './global.css';

export function App() {
  return (
    <>    
      <RouterProvider router={router} />
    </>
  )
}

export default App
