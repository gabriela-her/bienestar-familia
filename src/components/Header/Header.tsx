import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <NavLink to="/">Bienestar y Familia</NavLink>
      </div>
      <nav className="header__nav">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
          Inicio
        </NavLink>
        <NavLink to="/servicios" className={({ isActive }) => isActive ? 'active' : ''}>
          Servicios
        </NavLink>
        <NavLink to="/equipo" className={({ isActive }) => isActive ? 'active' : ''}>
          Equipo
        </NavLink>
        <NavLink to="/contacto" className={({ isActive }) => isActive ? 'active' : ''}>
          Contacto
        </NavLink>
      </nav>
    </header>
  )
}

export default Header