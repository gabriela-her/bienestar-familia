import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Servicios from './pages/Servicios/Servicios'
import Equipo from './pages/Equipo/Equipo'
import Contacto from './pages/Contacto/Contacto'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App