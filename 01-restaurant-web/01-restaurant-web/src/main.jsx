import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NavBar } from './NavBar.jsx'
import { FoodSection } from './FoodSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <FoodSection title="Comidas principales"/>
    <App />    
  </StrictMode>,
)
