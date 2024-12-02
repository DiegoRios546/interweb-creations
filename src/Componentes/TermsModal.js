import { useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom"; // Para navegación con React Router

const TermsModal = ({ onAccept }) => {
  const navigate = useNavigate(); // Hook de React Router para manejar navegación

  useEffect(() => {
    const showTermsAlert = async () => {
      const result = await Swal.fire({
        title: "Términos y Condiciones",
        html: `
          <p>Al usar esta aplicación, debes aceptar nuestros 
            <a id="terms-link" style="color: blue; cursor: pointer;">Términos y Condiciones</a> y nuestra Política de Privacidad.
          </p>
          <p>Para continuar, por favor selecciona una opción.</p>
        `,
        icon: "info",
        showDenyButton: true,
        confirmButtonText: "Acepto",
        denyButtonText: "No acepto",
        customClass: {
          popup: "swal-custom-popup",
          title: "swal-custom-title",
          htmlContainer: "swal-custom-html",
        },
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        didOpen: () => {
          // Añadir funcionalidad al enlace para redirigir con React Router
          const termsLink = document.getElementById("terms-link");
          if (termsLink) {
            termsLink.addEventListener("click", () => {
              Swal.close(); // Cerrar el modal al hacer clic en el enlace
              navigate("/terms"); // Redirigir a /terms
            });
          }
        },
      });

      if (result.isConfirmed) {
        localStorage.setItem("termsAccepted", true);
        onAccept(true);
      } else {
        localStorage.setItem("termsAccepted", false);
        onAccept(false);
      }
    };

    showTermsAlert();
  }, [onAccept, navigate]);

  return null; // Este componente no renderiza visualmente.
};

export default TermsModal;
