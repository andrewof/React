/* eslint-disable react/prop-types */
import data from '../../data/tecnicos.json'
import { Link } from 'react-router-dom'
import '../../css/CardTecnicos.css'


const tecnicos = data


// eslint-disable-next-line react/prop-types
const Card = ({ img, title1, title2, servicios }) => {
  return (
    <div className='card-tecnicos'>
      <img src={img} alt="" className='img-tecnicos'/>
      <div className='card-tecnicos-body'>
        <h5 className='title-tecnicos-5'>{title1}</h5>
        <h6 className='title-tecnicos-6'>{title2}</h6>
        <ul className='lista-servicos-tecnicos'>
          {servicios.map((servicio, indice) => (
            <li key={indice} className='servicios-tecnicos'>{servicio}</li>
          ))}
        </ul>
      </div>
      <Link to='/iniciar-sesion' className='btn-tecnicos-link'>
        <button className='btn-card-tecnicos-azul'>Ver más</button>
      </Link>
    </div>
  )
}

const CardTecnicos = () => {

  const tecnico = tecnicos.map((tecnicoItem) => (
    <Card 
      key={tecnicoItem.nombre}
      title1={tecnicoItem.nombre}
      title2={tecnicoItem.profesion}
      servicios={tecnicoItem.servicios_que_ofrece}
      img={tecnicoItem.img}
    />
  ))

  return (
    <div className='card-tecnicos-container'>
      {tecnico}
    </div>
  )
}

export default CardTecnicos