import React from 'react'
import './idi.css'

const Idi = () => {
  return (
    <div>
       <article>
            <section className="seccion-informacion seccion">
                <div className="titulo">
                    <div className="parrafo">
                        <p>Política de Investigación, Transferencia e Innovación CDT GATEWAY IT</p>
                    </div>
                    <img className="logo" src="../img/logoPrincipal2.png" alt=""/>
                </div>
            </section>
            <section className="seccion-informacion-2 seccion section-show">
                <img className="logo2 section-show" src="../img/logoDescripcion.png" alt="" srcset=""/ >

                <div className="info-politicas  section-show">
                    <div className="line"></div>
                    <div className="titulo">
                        <p>La empresa GATEWAY INNOVATION TECHNOLOGIES SAS, reconoce que el proceso de investigación es
                            la
                            base
                            del desarrollo tecnológico, al enfocarse en investigaciones aplicadas encaminadas a resolver
                            problemáticas en el contexto local, regional nacional e internacional. Gateway IT establece
                            la
                            investigación, la transferencia y la innovación como los ejes estratégicos transversales que
                            orientan el trabajo articulado con las organizaciones aliadas unen esfuerzos por generar,
                            divulgar y
                            apropiar productos de I+D+i.</p>
                    </div>
                </div>
            </section>

            <section className="seccion-indicadores seccion section-show">
                <h2>Cifras de I+D+i</h2>
                <div className="line2"></div>
                <div className="contenedor">

                    <div className="indicador">
                        <p><span>Artículos publicados</span>24</p>
                        <div className="progress" style={{ "--width": "100%" }}></div>
                    </div>
                    <div className="indicador">
                        <p><span>Prototipos desarrollados</span>18</p>
                        <div className="progress" style={{"--wth:62.2%"}}></div>
                    </div>
                    <div className="indicador">
                        <p><span>Convenios de cooperación</span>15</p>
                        <div className="progress" style="--wth:62.5%"></div>
                    </div>
                    <div className="indicador">
                        <p><span>Investigadores categorizados en la empresa</span>5</p>
                        <div className="progress" style="--wth:21%"></div>
                    </div>
                    <div className="indicador">
                        <p><span>Proyectos de I+D+i ejecutados con entes externos</span>9</p>
                        <div className="progress" style="--wth:37.5%"></div>
                    </div>

                </div>
            </section>
            <section className="seccion-grupo-investigacion seccion section-show">
                <h2>Grupo de Investigación GITIC</h2>
                <div>
                    <div>
                        <ul className="conten-list">
                            <li>
                                <h4>Nombre: </h4>
                                <p>GITIC: Gestión de la Investigación, Tecnológica e Innovación de Córdoba</p>
                            </li>
                            <li>
                                <h4>Código del grupo: </h4>
                                <p>COL0179707</p>
                            </li>
                            <li>
                                <h4>Líder del grupo:</h4>
                                <p>Yan Carlos Ureña Villamizar</p>
                            </li>
                            <li>
                                <h4>Categoría:</h4>
                                <p>A</p>
                            </li>
                            <li>
                                <h4>Clasificado en:</h4>
                                <p>Convocatoria 894 de 2021</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>Líneas de investigación</h4>
                        <ol>
                            <li>
                                <p>Autonomía de gestión de la investigación en universidades modo 2</p>
                            </li>
                            <li>
                                <p>Humanware en la gestión del conocimiento en universidades inteligentes</p>
                            </li>
                            <li>
                                <p>Smartcity, Sostenibilidad, energías limpias y cambio climático.</p>
                            </li>
                        </ol>
                    </div>
                    <button>
                        <a target="_blank"
                            href="https://scienti.minciencias.gov.co/gruplac/jsp/visualiza/visualizagr.jsp?nro=00000000018172">
                            MÁS INFORMAICÓN</a></button>
                </div>
            </section>
            <section>
                <h4>Nuestros aliados</h4>
            </section>
            <section className="galery">
                <img src="../img/upb.png" alt="upb"/>
                <img src="../img/bictour.png" alt="bictour"/>
                <img src="../img/corciem.png" alt="corcie"/>
                <img src="../img/creinnTech.png" alt="creinTech"/>
                <img src="../img/emprende.png" alt="emprende"/>
                <img src="../img/enviromentTecnology.png" alt="envTec"/>
                <img src="../img/rutaE.png" alt="Ruta e"/>
                <img src="../img/unicord.png" alt="Unicor"/>
                <img src="../img/impulsa.png" alt="impulsa"/>
                </section>
        </article>
    </div>
  )
};
export default Idi;