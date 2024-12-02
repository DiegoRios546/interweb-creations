import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Estilos/Productos.css';
import appweb from "../Componentes/Imagenes/appweb.png";
import appmovil from "../Componentes/Imagenes/appmovil.png";
import marketing from "../Componentes/Imagenes/marketing.png";
import administrador from "../Componentes/Imagenes/administrador.png";
import redes from "../Componentes/Imagenes/redes.png";

const ProductCarousel = () => {
  const products = [
    {
      id: 1,
      image: appweb,
      title: "Aplicación Web",
      description: "Desarrollo y planificación de una aplicación web segura que se adapte a tus necesidades.",
    },
    {
      id: 2,
      image: appmovil,
      title: "Aplicación Móvil",
      description: "Desarrollo de aplicación móvil (Android/iOS) certificada y subida a tiendas online.",
    },
    {
      id: 3,
      image: marketing,
      title: "Marketing Digital",
      description: "Creación y diseño de estrategias de marketing y campañas de publicidad para tu negocio.",
    },
    {
      id: 4,
      image: administrador,
      title: "Administración de Bases de Datos",
      description: "Gestión de bases de datos de alto flujo con análisis de datos avanzado.",
    },
    {
      id: 5,
      image: redes,
      title: "Instalación de Redes LAN",
      description: "Instalación de cableado para redes LAN o redes de internet.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    touchMove: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="product-carousel" id="productos" aria-label="Carrusel de Productos">
      <h3>¿Que hacemos?</h3>
      <h2 className="carousel-title">Nuestros Productos</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
              aria-label={`Imagen del producto ${product.title}`}
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <button className="btn-more">Saber más</button>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProductCarousel;
