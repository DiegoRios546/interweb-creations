import React, { useState } from "react";
import './Estilos/Contacto.css';
import Swal from "sweetalert2";
import contactImage from "../Componentes/Imagenes/contacto.png";  // Asegúrate de tener esta imagen en tu carpeta de imágenes

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    softwareType: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const termsAccepted = localStorage.getItem("termsAccepted") === "true";
    if (!termsAccepted) {
      Swal.fire({
        icon: "warning",
        title: "Acceso Restringido",
        text: "Debes aceptar los Términos y Condiciones para enviar mensajes.",
      });
      return;
    }
    
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado!",
          text: "Gracias por contactarnos, te responderemos pronto.",
          confirmButtonText: "Aceptar",
          backdrop: true,
          timer: 5000,
          customClass: {
            popup: "swal-custom-popup", // Clase personalizada para estilos
            title: "swal-custom-title",
            content: "swal-custom-content",
          },
        });

        setFormData({
          name: "",
          email: "",
          softwareType: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `No se pudo enviar el mensaje: ${errorData.error}`,
          confirmButtonText: "Intentar nuevamente",
        });
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al enviar el formulario. Inténtalo más tarde.",
        confirmButtonText: "Cerrar",
      });
    }
  };

  

  return (
    <section className="contact-us-section" id="contacto">
      <h3>Ponte en contacto con nosotros... </h3>
      <div className="contact-us-container">
        <div className="contact-form">
          <h2>Contáctanos</h2>
          {/* Imagen debajo del título en pantallas pequeñas */}
          <div className="contact-image-mobile">
            <img src={contactImage} alt="Contacto" />
          </div>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="softwareType">Tipo de desarrollo:</label>
            <select
              id="softwareType"
              name="softwareType"
              value={formData.softwareType}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona</option>
              <option value="web">Desarrollo Web</option>
              <option value="mobile">Desarrollo Móvil</option>
              <option value="marketing">Marketing digital</option>
              <option value="database">Gestion de base de datos</option>
              <option value="red">Instalacion de redes</option>
            </select>

            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="btn-submit">Enviar</button>
          </form>
        </div>

        {/* Imagen a la derecha en pantallas grandes */}
        <div className="contact-image">
          <img src={contactImage} alt="Contacto" />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
