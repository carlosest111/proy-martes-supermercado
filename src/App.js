// App.js
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componentes/Navbar';
import Inicio from './paginas/Inicio';
import Contacto from './paginas/Contacto';
import Categoria from './paginas/Categoria';
import Sucursal from './paginas/Sucursal';
import Blog from './paginas/Blog';
import Creditos from './paginas/Creditos';
import Negocios from './paginas/Negocios';  // Añadido para la nueva página
import QuienesSomos from './paginas/QuienesSomos'; // Agrega esta línea
import Deseos from './paginas/Deseos';
import ShoppingPage from './paginas/ShoppingPage'; // Importa la página de compras

import PedidoPage from './paginas/PedidoPage'; // Importa la página de PedidoPage

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/categoria' element={<Categoria />} />
          <Route path='/sucursal' element={<Sucursal />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/creditos' element={<Creditos />} />
          <Route path='/negocios' element={<Negocios />} />  {/* Nueva ruta para la página de Negocios */}
          <Route path='/quienes-somos' element={<QuienesSomos />} /> {/* Agrega esta línea */}
          <Route path='/deseos' element={<Deseos />} /> {/* Add this line for the Deseos page */}
          <Route path='/shopping' element={<ShoppingPage />} /> {/* Añade la ruta para la página de compras */}
          
          <Route path="/pedido" element={<PedidoPage />} /> {/* Agrega esta línea para PedidoPage */}
        
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
