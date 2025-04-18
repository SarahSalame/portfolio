import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from './components/Context/Context.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <BrowserRouter basename="/portfolio/" >
          <App />
    </BrowserRouter>
</ThemeProvider>
)
