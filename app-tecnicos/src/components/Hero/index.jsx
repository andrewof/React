import { Link } from 'react-router-dom'
import '../../css/Hero.css'

// eslint-disable-next-line react/prop-types
const Hero = ({ textBtn, parrafo, img, classLink }) => {
  return (
    <div className='hero-container'>
      <div className='hero-content'>
        <p className='p-hero'>{parrafo}</p>
        <Link to={classLink} className='btn-hero-1'>{textBtn}</Link>
      </div>
      <img src={img} alt="tecnico-1" className='img-hero'/>
    </div>
  )
}

export default Hero