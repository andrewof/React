import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import '../../css/Navbar.css'

function Prueba() {

  return (
    <Navbar collapseOnSelect expand="lg" className=" navbar-custom">
      <Container>
      <Navbar.Brand as={Link} to='/#'>
          <div className='logo-container'>
            <img
                alt=""
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
              />{' '}
              <span className='logo-text'>TecnoServ</span>
          </div>
        </Navbar.Brand>
        <Navbar.Brand as={Link} to='/#'></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto menu">
            <NavLink to='/' className={({isActive}) => 
              isActive ? 'active-link' : 'menu-opcion'
            }>
              Inicio
            </NavLink>
            <span className='nav-link-space'></span>
            <NavLink to='/tecnicos' className={({isActive}) => 
              isActive ? 'active-link' : 'menu-opcion'
            }>
              Técnicos
            </NavLink>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/iniciar-sesion'>
              <button className='btn-nav-blanco'>Iniciar sesión</button>
            </Nav.Link>
            <Nav.Link as={Link} to='/registrarse'>
              <button className='btn-nav-azul'>Registrarse</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Prueba;