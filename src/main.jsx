import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Errormaker } from './Errormaker.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Errormaker>
    </Errormaker>
  </StrictMode>,
)
