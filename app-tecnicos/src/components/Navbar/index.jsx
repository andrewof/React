import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import '../../css/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' className='navbar-link'>
             <img src={logo} alt="logo" className='img-logo'/>
             <span className='name-app'>TecnoServ</span>
          </NavLink>
        </li>
      </ul>
      <ul>
        <li><NavLink to='/' className='navbar-link'>Inicio</NavLink></li>
        <li><NavLink to='/tecnicos' className='navbar-link'>Técnicos</NavLink></li>
        <li><NavLink to='/tecnicos' className='navbar-link'>Próximamente</NavLink></li>
      </ul>
      <ul>
        <Link to='/iniciar-sesion' className='nav-button-transparent'>Iniciar</Link>
        <Link to='/registrarse' className='nav-button nav-button-blue'>Registrarse</Link>
      </ul>
    </nav>
  )
}

export default Navbar