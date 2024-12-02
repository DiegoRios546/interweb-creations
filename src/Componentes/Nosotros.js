import React from 'react';
import './Estilos/Nosotros.css';
import nosotrosImage from "../Componentes/Imagenes/nosotros.png"; // La imagen para la sección Nosotros

const Nosotros = () => {
  return (
    <section className="about-section" id='nosotros'>
      {/* Sección del eslogan */}
      <div className="slogan-section">
        <h1>-Innovamos el futuro digital con soluciones creativas-</h1>
        <p> y transformamos ideas en software de calidad para tu negocio</p>
      </div>

      {/* Sección Nosotros */}
      
      <div className="nosotros-container">
        <div className="nosotros-text">
        <h3>¿Quienes somos?</h3>
        <p>
          En Interweb Creations, nos especializamos en ofrecer soluciones
          tecnológicas innovadoras para empresas de todo el mundo. Nuestro equipo
          de expertos en desarrollo de software trabaja incansablemente para
          transformar ideas en productos digitales de alta calidad. Creemos en la
          innovación, la calidad y la excelencia, y nos comprometemos a ayudar a
          nuestros clientes a lograr sus objetivos a través de la tecnología.
        </p>
        <p>
          Desde la creación de aplicaciones web personalizadas hasta soluciones de
          software a medida, nuestra pasión por el desarrollo de software se refleja
          en cada uno de los proyectos que emprendemos. Trabajamos estrechamente con
          nuestros clientes para garantizar que cada producto sea perfecto, fácil de
          usar y, sobre todo, útil.
        </p>
        </div>
        <div className="nosotros-image">
          <img src={nosotrosImage} alt="Nosotros" />
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
