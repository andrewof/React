import data from '../../data/tecnicos.json'
import '../../css/CardTecnicos.css'
import { Link } from 'react-router-dom'


const tecnicos = data;

// eslint-disable-next-line react/prop-types
const Card = ({ img, titulo, parrafo }) => {
  return (
    <div className="card-tecnico">
      <img src={img} alt="" />
      <div className="card-tecnico-body">
        <h5 className="card-tecnico-titulo">{titulo}</h5>
        <p className="card-tecnico-parrafo">{parrafo}</p>
        <div className='link-container'>
          <Link className='button-blue'>Ver más</Link>
        </div>
      </div>
    </div>
  )
}

const CardTecnicos = () => {

  const tecnicosComponents = tecnicos.map((tecnicoItem) => (
    <Card 
      key={tecnicoItem.nombre}
      titulo={tecnicoItem.nombre}
      parrafo={tecnicoItem.profesion}
      img={tecnicoItem.img}
    />
  ))

  return (
    <div className='card-tecnico-container'>
      {tecnicosComponents}
    </div>
  )
}

export default CardTecnicos