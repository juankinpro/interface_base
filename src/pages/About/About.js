import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container">
      <h1>Acerca de SBS</h1>
      <p>Bienvenido a SBS (Small Business Solution). Esta aplicación esta disenada para ayudar a los negocios pequeños a gestionar su inventario de productos de manera eficiente.</p>
      <p>En esta página, puedes ver los detalles de cada producto, gestionarlos y realizar consultas sobre su stock.</p>
      }
      <Link to="/" className="link-back">Volver a la página de inicio</Link>
    </div>
  );
};

export default About;
