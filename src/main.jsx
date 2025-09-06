import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import OrbContainer from './Components/OrbContainer'
import Test from './Components/Test'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <OrbContainer/> */}
    <Test/>
  </StrictMode>,
)
