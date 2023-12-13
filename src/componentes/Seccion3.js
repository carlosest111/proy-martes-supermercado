import React from 'react';

const Seccion3 = () => {
  const contenedorEstilos = {
    width: '100%', // Ajusta el ancho según tus necesidades
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginBottom: '20px',
  };

  const columnaEstilos = {
    width: '48%',
  };

  const imagenEstilos = {
    width: '50px', // Ajusta el ancho según tus necesidades
    height: '50px', // Ajusta la altura según tus necesidades
    borderRadius: '50%',
    marginBottom: '10px',
  };

  const imagenURL = 'https://www.fidalga.com/cdn/shop/files/Untitled_design_3_1024x1024_crop_center.png?v=1654957809';

  return (
    <div style={{ ...contenedorEstilos, marginLeft: 'auto', marginRight: 'auto' }}>
      {/* Columna 1: "Patito" */}
      <div style={columnaEstilos}>
        <h2 style={{ color: '#FFA500', marginBottom: '10px' }}>Patito</h2>
        <p>Sabemos lo que te gusta, porque estamos muy cerca de ti, por eso somos detallistas, curiosos, vitalistas y cercanos, inspirándote una forma más saludable de relacionarte con la alimentación, compartiendo tu cultura y ofreciéndote productos locales que garantizan la máxima frescura.</p>
      </div>

      {/* Columna 2: "POSTS MÁS POPULARES" */}
      <div style={{ ...columnaEstilos, marginLeft: 0 }}> {/* Ajusta marginLeft a 0 para que esté pegada a la izquierda */}
        <h2 style={{ color: '#FFA500', marginBottom: '10px' }}>POSTS MÁS POPULARES</h2>

        {/* Pregunta 1 */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img src={imagenURL} alt="Pregunta 1" style={{ ...imagenEstilos, marginRight: '10px' }} />
          <div>
            <p>¿Qué tienen de especial los supermercados Dialprix?</p>
            <p>Escrito el 30/10/2023</p>
          </div>
        </div>

        {/* Pregunta 2 */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img src={imagenURL} alt="Pregunta 2" style={{ ...imagenEstilos, marginRight: '10px' }} />
          <div>
            <p>Cómo combatir la astenia otoñal a través de la alimentación</p>
            <p>Escrito el 30/10/2023</p>
          </div>
        </div>

        {/* Agrega más preguntas según sea necesario */}
      </div>
    </div>
  );
};

export default Seccion3;
