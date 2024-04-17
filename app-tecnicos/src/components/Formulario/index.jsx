import { useState } from "react";
import { Link } from 'react-router-dom'
import '../../css/Formulario.css'

const Formulario = () => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Correo:', correo);
    console.log('Password:', password);
    setCorreo('');
    setPassword('');
  };

  return (
    <section className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="title-container">
          <h4 className="title-form">Iniciar sesión</h4>
        </div>
        <hr className="hr-espacio"/>
        <div className="input-container">
          <label htmlFor="correo" className="label">Correo:</label>
          <input
            type="correo"
            value={correo}
            onChange={(event) => setCorreo(event.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password" className="label">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="input-container">
          <button type="submit" className="btn-nav-azul">Iniciar sesión</button>
        </div>
        <div className="input-container">
          <p>¿No tienes cuenta? <Link to='/registrarse'>Registrate</Link></p>
        </div>
      </form>
    </section>
  );
};

export default Formulario;
