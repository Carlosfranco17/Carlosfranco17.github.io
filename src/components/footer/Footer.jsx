import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="div-footer">
        <div className="footer-about">
          <h1 className="title-footer">about</h1>

          <p className="gate">
            Gateway IT, es una empresa especializada en brindar soluciones
            tecnológicas de vanguardia. Con la combinación de nuestro equipo
            altamente capacitado y la tecnología de punta, ofrecemos soluciones
            personalizadas en hardware y software utilizando las últimas
            tendencias en ingeniería, innovación, investigación y desarrollo.
          </p>
        </div>

        <div className="nosotros-footer">
          <h1 className="title-footer">nosotros</h1>

          <ul className="ul">
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Servicios</li>
            <li>I+D+i</li>
            <li>Proyectos</li>
            <li>Trabaja con nosotros</li>
          </ul>
        </div>

        <div className="contacto-footer">
          <h1 className="title-footer">contacto</h1>

          <ul className="ul">
            <li>Montelíbano, Córdoba</li>
            <li>Teléfono: 305 2442919</li>
            <li>contacto@gatewayit.co</li>
          </ul>
        </div>

        <div className="seguir-footer">
          <h1 className="title-footer">siguenos</h1>


          <ul className="ul redes">
<li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
<li><a href=""><i class="fa-brands fa-square-x-twitter"></i></a></li>
<li><a href=""><i class="fa-brands fa-square-instagram"></i></a></li>

          </ul>


        </div>
      </div>

      <div>

        <h1 className="derechos">Copyright Company GaTEWAY IT © 2023. All rights reserved.</h1>
      </div>
    </footer>
  );
};

export default Footer;
