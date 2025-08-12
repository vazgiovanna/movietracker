import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Pagina2 from './components/Pagina2/Pagina2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
{/* header */}

{/* rota - if rota home = <Home /> */}

{/* footer */}

    <App />
    <Pagina2/>
  </StrictMode>,
)
