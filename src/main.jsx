import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/global.css'
// import { App } from './App'
import AppFront from './AppFront'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppFront />
  </StrictMode>,
)
