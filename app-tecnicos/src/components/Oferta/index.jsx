import '../../css/Oferta.css'
import oferta_imagen_1 from '../../assets/técnico-img-card-1.png'
import oferta_imagen_2 from '../../assets/técnico-img-card-2.png'
import oferta_imagen_3 from '../../assets/técnico-img-card-3.png'



// eslint-disable-next-line react/prop-types
const Card = ({ title, img, text }) => {
  return (
    <div className='card'>
      <img src={img} alt='imágen' className='img-card'/>
      <div className='card-body'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text'>{text}</p>
      </div>
    </div>
  )
}

const Oferta = () => {
  return (
    <div className='card-container'>
      <Card 
      // eslint-disable-next-line no-undef
        img={oferta_imagen_1}
        title='¡Convierte la búsqueda de técnicos en una experiencia sin estrés!'
        text='Encuentra expertos confiables en minutos y soluciona tus problemas técnicos de manera rápida y eficiente.'
      />
      <Card 
        img={oferta_imagen_2}
        title='¿Necesitas ayuda técnica? ¡No busques más!'
        text='Nuestra app conecta usuarios con técnicos verificados y calificados en tu área. Desde reparaciones en el hogar hasta asistencia informática, estamos aquí para resolver tus problemas con un solo clic.'
      />
      <Card 
        img={oferta_imagen_3}
        title='¿Cansado de buscar técnicos de confianza?'
        text='Simplifica tu vida con nuestra app líder en servicios técnicos. Desde fontaneros hasta electricistas, te conectamos con profesionales competentes y disponibles cuando los necesites.'
      />
    </div>
  )
}

export default Oferta