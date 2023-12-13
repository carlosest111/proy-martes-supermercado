import React from 'react';

// Estilos
const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '800px',
  margin: '2rem auto',
  padding: '1rem',
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const columnStyle = {
  flex: '1',
  margin: '0 1rem',
};

const titleStyle = {
  fontSize: '1.5rem',
  marginBottom: '1rem',
  color: '#333',
};

const formStyle = {
  maxWidth: '400px',
  marginBottom: '1rem',
};

const formGroupStyle = {
  marginBottom: '1rem',
};

const labelStyle = {
  display: 'block',
  fontSize: '0.875rem',
  marginBottom: '0.25rem',
  color: '#555',
};

const inputStyle = {
  width: '100%',
  padding: '0.5rem',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const submitButtonStyle = {
  backgroundColor: '#FFA500',
  color: 'white',
  border: 'none',
  padding: '0.75rem 1.5rem',
  fontSize: '1rem',
  cursor: 'pointer',
  borderRadius: '4px',
  transition: 'background-color 0.3s',
};

const infoStyle = {
  marginTop: '2rem',
};

export const Conc = () => {
  return (
    <div style={containerStyle}>
      <div style={columnStyle}>
        <h2 style={titleStyle}>Contacto</h2>
        <form style={formStyle}>
          <div style={formGroupStyle}>
            <label htmlFor="nombre" style={labelStyle}>Nombre</label>
            <input type="text" id="nombre" name="nombre" style={inputStyle} required />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="telefono" style={labelStyle}>Número de teléfono</label>
            <input type="tel" id="telefono" name="telefono" style={inputStyle} required />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="correo" style={labelStyle}>Correo electrónico *</label>
            <input type="email" id="correo" name="correo" style={inputStyle} required />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="mensaje" style={labelStyle}>Mensaje *</label>
            <textarea id="mensaje" name="mensaje" rows="4" style={inputStyle} required></textarea>
          </div>
          <button type="submit" style={submitButtonStyle}>Enviar</button>
        </form>
      </div>
      <div style={columnStyle}>
        <div style={infoStyle}>
          <h3 style={titleStyle}>Información</h3>
          <p>
            Nos encantaría escuchar más de vos en caso de que necesites.
          </p>
          <p>
            <strong>Dirección:</strong> Av El Trompillo esquina Calle Yacuiba, Santa Cruz de la Sierra, Bolivia
          </p>
          <p>
            <strong>Email:</strong> ecommerce@fidalga.com
          </p>
          <p>
            <strong>Horario de atención:</strong> Lunes a Domingo: 7:00 am - 11:00 pm
          </p>
        </div>
      </div>
    </div>
  );
};
