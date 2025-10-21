import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
    <App />
  </StrictMode>,
)
