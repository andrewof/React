import { useState } from "react";
import { Link } from 'react-router-dom'
import '../../css/FormularioRegistro.css'

const FormularioRegistro = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [direccion, setDireccion] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Correo:', correo);
    console.log('Password:', password);
    setCorreo('');
    setPassword('');
  };

  return (
    <section className="form-container-registro">
      <form onSubmit={handleSubmit}>
        <div className="title-container-registro">
          <h4 className="title-form-registro">Registrarse</h4>
        </div>
        <hr className="hr-espacio-registro"/>
        <div className="for-row">
          <div className="input-container-registro">
            <label htmlFor="nombre" className="label">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
            />
          </div>
          <div className="input-container-registro">
            <label htmlFor="apellido" className="label">Apellido:</label>
            <input
              type="text"
              id="apellido"
              value={apellido}
              onChange={(event) => setApellido(event.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="input-container-registro">
            <label htmlFor="telefono" className="label">Telefono:</label>
            <input
              type="text"
              id="telefono"
              value={telefono}
              onChange={(event) => setTelefono(event.target.value)}
            />
          </div>
          <div className="input-container-registro">
            <label htmlFor="correo" className="label">Correo:</label>
            <input
              type="correo"
              value={correo}
              onChange={(event) => setCorreo(event.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="input-container-registro">
            <label htmlFor="password" className="label">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="input-container-registro">
            <label htmlFor="direccion" className="label">Direccion:</label>
            <input
              type="text"
              id="direccion"
              value={direccion}
              onChange={(event) => setDireccion(event.target.value)}
            />
          </div>
        </div>
        <div className="input-container-registro">
          <button type="submit" className="btn-nav-azul">Registrarse</button>
        </div>
        <div className="input-container-registro">
          <p>¿Ya tienes cuenta? <Link to='/iniciar-sesion'>Iniciar sesión</Link></p>
        </div>
      </form>
    </section>
  );
};

export default FormularioRegistro;