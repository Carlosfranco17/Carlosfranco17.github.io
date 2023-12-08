import React from 'react'
import './servicios.css'
import CardServices from '../cardServices.jsx/CardServices'
import ServiComple from '../../servicomple/ServiComple'
import ServiCompledos from '../ServiCompledos/ServiCompledos'


const Servicios = () => {
  return (
    <div className='servicios_one'>




<div id="slider">
  <div className="slides">
    <div className="slider">
      <div className="legend"></div>
      <div className="content">
        <div className="content-txt" >
          <h1>Lorem ipsum dolor</h1>
          <h2>Nam ultrices pellentesque facilisis. In semper tellus mollis nisl pulvinar vitae vulputate lorem consequat. Fusce odio tortor, pretium sit amet auctor ut, ultrices vel nibh.</h2>
        </div>
      </div>
      <div className="image">
        <img src="https://cdn.stocksnap.io/img-thumbs/960w/VVHE6VHMAW.jpg"/>
      </div>
    </div>
    <div className="slider">
      <div className="legend"></div>
      <div className="content">
        <div className="content-txt">
          <h1>Lorem ipsum dolor</h1>
          <h2>Nam ultrices pellentesque facilisis. In semper tellus mollis nisl pulvinar vitae vulputate lorem consequat. Fusce odio tortor, pretium sit amet auctor ut, ultrices vel nibh.</h2>
        </div>
      </div>
      <div className="image">
        <img src="https://cdn.stocksnap.io/img-thumbs/960w/AKWVXIXFA8.jpg"/>
      </div>
    </div>
    <div className="slider">
      <div className="legend"></div>
      <div className="content">
        <div className="content-txt">
          <h1>Lorem ipsum dolor</h1>
          <h2>Nam ultrices pellentesque facilisis. In semper tellus mollis nisl pulvinar vitae vulputate lorem consequat. Fusce odio tortor, pretium sit amet auctor ut, ultrices vel nibh.</h2>
        </div>
      </div>
      <div className="image">
        <img src="https://cdn.stocksnap.io/img-thumbs/960w/TPLJK7JPRR.jpg"/>
      </div>
    </div>
    <div className="slider">
      <div className="legend"></div>
      <div className="content">
        <div className="content-txt">
          <h1>Lorem ipsum dolor</h1>
          <h2>Nam ultrices pellentesque facilisis. In semper tellus mollis nisl pulvinar vitae vulputate lorem consequat. Fusce odio tortor, pretium sit amet auctor ut, ultrices vel nibh.</h2>
        </div>
      </div>
      <div className="image">
        <img src="https://cdn.stocksnap.io/img-thumbs/960w/XJ2BKV9ASS.jpg"/>
      </div>
    </div>
  </div>
  <div className="switch">
    <ul>
      <li>
        <div className="on"></div>
      </li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</div>





<section className='services'>

  <div className='title-services'><h1 className='title-main'>servicios</h1></div>
       
    </section>
  

<CardServices/>

<ServiComple/>


<p className='text-secun'>En resumen, en Gateway I.T, ofrecemos servicios integrales de formulación, gestión y administración de proyectos de ciencia, tecnología e innovación, con un enfoque en proporcionar soluciones de vanguardia y valor agregado a nuestros clientes. Estamos comprometidos con la excelencia en la industria y siempre buscamos estar a la vanguardia de las tendencias tecnológicas y de innovación para ofrecer soluciones de alta calidad a nuestros clientes.</p>
<p className='text-secun'>En Gateway I.T, ofrecemos una amplia gama de servicios de tecnología e innovación para ayudar a nuestros clientes a optimizar sus procesos y lograr sus objetivos empresariales. Nuestros servicios incluyen:</p>


<ServiCompledos/>
    </div>
  )
}

export default Servicios