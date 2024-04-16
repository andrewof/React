import logo from '../../assets/logo.png'
import '../../css/Footer.css'

function FooterCo() {
  
  return (
    <footer className="footer-container">
        <img src={logo} alt="logo TecnoServ" className="footer-img"/>
        <hr />
        <p className='parrafo-footer'>Todos los derechos reservados &copy; 2024 <strong>TecnoServ</strong></p>
    </footer>
  );
}

export default FooterCo
