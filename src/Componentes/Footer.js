import React from "react";
import "./Estilos/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-section about-us">
          <h4>Interweb Creations</h4>
          <p>
            En Interweb Creations, transformamos ideas en soluciones de software
            innovadoras. Creamos plataformas personalizadas para impulsar el
            crecimiento de tu negocio.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section quick-links">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li>
              <a href="#nosotros">Sobre Nosotros</a>
            </li>
            <li>
              <a href="#productos">Servicios</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
            <li>
              <a href="#privacidad">Política de Privacidad</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h4>Contacto</h4>
          <ul>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Dirección: Calle
              San miguel #300, Col. San Carlos
            </li>
            <li>
              <FontAwesomeIcon icon={faPhoneAlt} /> Teléfono: +6181857847
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> Email:{"interwebcreations@gmail.com "}
              <a href="mailto:info@interwebcreations.com">
                interwebcreations@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social-media">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Interweb Creations. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
