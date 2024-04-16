import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Navbar from '../../components/Navbar'
import Tecnicos from '../Tecnicos'
import NotFound from '../NotFound'
import FooterCo from '../../components/Footer'
import './App.css'


// const AppRoutes = () => {
//   let routes = useRoutes([
//     {path: '/', element: <Home />},
//     {path: '/tecnicos', element: <Tecnicos />},
//     {path: '/*', element: <NotFound />}
//   ])

//   return routes
// }


const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <FooterCo />
            </>
          }
        />
        <Route path='/tecnicos' 
          element={
            <>
              <Navbar />
              <Tecnicos />
              <FooterCo />
            </>
          }
        />
        <Route path="/tecnicos" element={<Tecnicos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
