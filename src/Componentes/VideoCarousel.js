import React from "react";
import Slider from "react-slick";
import './Estilos/VideoCarousel.css';
import videoThumb1 from "../Componentes/Imagenes/video1.jpg"; // Asegúrate de tener imágenes y videos en tu carpeta
import videoThumb2 from "../Componentes/Imagenes/video2.jpg";
import videoThumb3 from "../Componentes/Imagenes/video3.jpg";

const VideoNewsCarousel = () => {
  const videosAndNews = [
    {
      id: 1,
      title: "El Futuro del Desarrollo de Software",
      description: "Aprende cómo el software está cambiando el mundo moderno.",
      videoUrl: "https://www.youtube.com/watch?v=q3xTgphjfqQ",
      image: videoThumb1,
    },
    {
      id: 2,
      title: "Beneficios del Desarrollo Ágil",
      description: "Descubre los beneficios de utilizar metodologías ágiles en tus proyectos.",
      videoUrl: "https://www.youtube.com/watch?v=S-u3H7bv54M",
      image: videoThumb2,
    },
    {
      id: 3,
      title: "Transformación Digital en las Empresas",
      description: "La transformación digital está revolucionando las industrias.",
      videoUrl: "https://www.youtube.com/watch?v=tNdS8pj5ZeI",
      image: videoThumb3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
    <section className="video-news-carousel">
    <h2>Pricipales Novedades</h2>
      <Slider {...settings}>
        {videosAndNews.map((item) => (
          <div key={item.id} className="video-item">
            <div className="video-thumbnail" style={{ backgroundImage: `url(${item.image})` }}>
              <div className="overlay"></div>
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.videoUrl} target="_blank" rel="noopener noreferrer" className="btn-watch">Ver Video</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default VideoNewsCarousel;
