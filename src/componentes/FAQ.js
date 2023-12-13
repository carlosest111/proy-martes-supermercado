// FAQ.js
import React from 'react';

const FAQ = () => {
  return (
    <div className="faq-container">
      <h2>Preguntas Frecuentes (FAQ)</h2>
      <div className="faq-item">
        <h4>¿Cuáles son los horarios de atención?</h4>
        <p>Nuestro horario de atención es de lunes a domingo de 7:00 am a 11:00 pm.</p>
      </div>
      <div className="faq-item">
        <h4>¿Cómo puedo contactarlos?</h4>
        <p>Puedes contactarnos a través del correo electrónico ecommerce@fidalga.com.</p>
      </div>
      {/* Agrega más preguntas frecuentes según sea necesario */}
    </div>
  );
};

export default FAQ;
