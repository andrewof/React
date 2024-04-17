import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import Oferta from '../../components/Oferta'
import tecnico_1 from '../../assets/tecnico-1.jpg'
import tecnico_2 from '../../assets/tecnico-2.png'

function Home(){
  return ( 
    <Layout>
      <Hero 
        parrafo='Encuentra técnicos de una manera más rápida desde internet.'
        textBtn='Buscar un Técnico'
        img={tecnico_1}
        classLink='/tecnicos'
      />
      <Oferta />
      <Hero 
        parrafo='¡Ecuentra servicios de calidad!'
        textBtn='Registrate Aquí'
        img={tecnico_2}
        classLink='/registrarse'
      />
    </Layout>
  )
}

export default Home