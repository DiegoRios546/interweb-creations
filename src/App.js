import './App.css';
import Navbar from './Componentes/Navbar';
import Nosotros from './Componentes/Nosotros';
import Productos from './Componentes/Productos';
import VideoCarousel from './Componentes/VideoCarousel';
import Contacto from './Componentes/Contacto';
import Footer from './Componentes/Footer';
import TermsModal from './Componentes/TermsModal';
import Terms from './Componentes/Terms';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Verificar si los términos ya han sido aceptados (persistencia con localStorage)
  useEffect(() => {
    const accepted = localStorage.getItem('termsAccepted') === 'true';
    setTermsAccepted(accepted);
  }, []);

  const handleTermsAcceptance = (accepted) => {
    setTermsAccepted(accepted);
    localStorage.setItem('termsAccepted', accepted.toString());
  };

  return (
    <Router>
      <div className="App">
        {/* Navbar siempre visible */}
        <Navbar />

        {/* Mostrar el modal de términos si no están aceptados y no estás en la página de términos */}
        {!termsAccepted && window.location.pathname !== '/terms' && (
          <TermsModal onAccept={handleTermsAcceptance} />
        )}

        <Routes>
          {/* Ruta para la página principal */}
          <Route
            path="/"
            element={
              termsAccepted ? (
                <>
                  <Nosotros />
                  <Productos />
                  <VideoCarousel />
                  <Contacto />
                  <Footer />
                </>
              ) : null
            }
          />

          {/* Ruta para los términos y condiciones */}
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
