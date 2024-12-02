import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link para navegación
import "./Estilos/Navbar.css";
import logo from "../Componentes/Imagenes/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <img src={logo} alt="Interweb Creations Logo" className="logo-image" />
        <span>Interweb Creations</span>
      </div>
      <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" className="navbar-item" onClick={toggleMenu}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/nosotros" className="navbar-item" onClick={toggleMenu}>
            Nosotros
          </Link>
        </li>
        <li>
          <Link to="/productos" className="navbar-item" onClick={toggleMenu}>
            Servicios
          </Link>
        </li>
        <li >
          <Link className="navbar-item" to="/proyectos" onClick={toggleMenu}>
            Proyectos
          </Link>
        </li>
        <li>
          <Link className="navbar-item" to="/contacto" onClick={toggleMenu}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
