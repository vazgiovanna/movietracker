// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './components/Home/Home.jsx'
import Download from './components/download/Download.jsx'
import Login from './components/login/login.jsx'
import Minhaconta from './components/Minhaconta/minhaConta.jsx'
import Cards from './components/main/Cards.jsx';
import Filme from './components/main/Filme.jsx';

import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'download', element: <Download /> },
      { path: 'login', element: <Login /> },
      { path: 'minhaconta', element: <Minhaconta /> },
      { path: 'filmes', element: <Cards /> },
      { path: 'filme/:id', element: <Filme /> },
    ],
  },
]);

function Layout() {
  return (
    <>
      <header className="bg-gray-900">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <img 
                src="src/components/images/MOVIETRACKER (1).png"
                alt="Logo"
                className="logo" style={{ width: '150px', height: 'auto' }}
              />
            </Link>
          </div>

          <div className="flex gap-4 items-center">
            <Link to="/" className="text-sm/6 font-semibold text-white">
              Sobre
            </Link>
            <Link to="/download" className="text-sm/6 font-semibold text-white">
              Download
            </Link>
            <Link to="/minhaconta" className="text-sm/6 font-semibold text-white">
              Minha Conta
            </Link>
            <Link to="/filmes" className="text-sm/6 font-semibold text-white">
              Filmes
            </Link>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/login" className="text-sm/6 font-semibold text-white">
              Login <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Conteúdo da rota */}
      <Outlet />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
