import React from 'react'
import { Route, Routes } from 'react-router-dom'
 import Inicio from './components/inicio/Inicio'
import Nosotros from './components/nosotros/Nosotros'
import Servicios from './components/servicios/Servicios'
import Idi from './components/idi/Idi'
import Proyectos from './components/proyectos/Proyectos'
import TrabajaConNosotros from './components/trabajaConNosotros/TrabajaConNosotros'
import Navbar from './components/nav/Navbar'
import Footer from './components/footer/Footer'

const Gatewayit = () => {
  return (
    <div>

<Navbar/>

      <Routes>


        <Route path='/' element={<Inicio/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/servicios' element={<Servicios/>}/>
        <Route path='/idi' element={<Idi/>}/>
        <Route path='/proyectos' element={<Proyectos/>}/>
        <Route path='/trabajaconnosotros' element={<TrabajaConNosotros/>}/>
        {/* <Route path='/blog' element={<h1>blog</h1>}/> */}


      </Routes>


<Footer/>


      

    </div>
  )
}

export default Gatewayit