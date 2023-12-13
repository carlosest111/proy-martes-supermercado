import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginTop: '20px',
};

const productStyle = {
  textAlign: 'center',
};

const imageStyle = {
  width: '100px',
  height: '100px',
  marginBottom: '10px',
};

const Page9 = ({ addToWishlist, addToShoppingList }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Coca Cola', price: 1.99, image: 'https://www.fidalga.com/cdn/shop/products/7771605000865_600x.jpg?v=1656732097' },
    { id: 2, name: 'Esponjas', price: 5.99, image: 'https://www.fidalga.com/cdn/shop/products/1ab26db2-b4a3-43ee-a47f-0f8dd6e189d7_8b5aca3c-c042-4b27-804a-4e4af60f8bf1_600x.png?v=1653345377' },
    { id: 3, name: 'Papel Higiénico', price: 3.99, image: 'https://www.fidalga.com/cdn/shop/products/SCOTT-DOBLE-HOJA-12ROLLOS.png?v=1653344773' },
    { id: 4, name: 'Levadura', price: 2.49, image: 'https://www.fidalga.com/cdn/shop/products/c138db8a-97d3-4a7e-bfd5-98c3e421ed32_76a4e343-1422-46b7-8e9b-074c2630d5b5_360x.png?v=1653345120' },
    { id: 5, name: 'Mantequilla', price: 4.99, image: 'https://www.fidalga.com/cdn/shop/products/7771802000484_360x.jpg?v=1656732922' },
    { id: 6, name: 'Harina', price: 2.99, image: 'https://www.fidalga.com/cdn/shop/products/604c37c6-8897-4605-a2be-77901c9c282a_7b4658f1-92e3-4d65-960e-2a6c6f7bfca7_360x.png?v=1653345146' },
    { id: 7, name: 'Tomate', price: 1.49, image: 'https://www.fidalga.com/cdn/shop/products/7891300902124_360x.jpg?v=1656732537' },
    { id: 8, name: 'Queso', price: 6.99, image: 'https://www.fidalga.com/cdn/shop/products/DSC02027_600x.jpg?v=1653344466' },
    { id: 9, name: 'Arroz', price: 3.29, image: 'https://www.fidalga.com/cdn/shop/products/DSC06576.jpg?v=1653343446' },
    { id: 10, name: 'Jabón', price: 1.99, image: 'https://www.fidalga.com/cdn/shop/products/67238891190.jpg?v=1656732512' },
  ]);

  const navigate = useNavigate();

  const handleButtonClick = (product) => {
    console.log('Producto seleccionado:', product);

    if (addToWishlist && typeof addToWishlist === 'function') {
      addToWishlist(product);
    }

    if (addToShoppingList && typeof addToShoppingList === 'function') {
      addToShoppingList(product);
    }

    // Redirige a la página de compras (ShoppingPage)
    navigate('/shopping');
  };

  return (
    <div style={containerStyle}>
      {products.map((product) => (
        <div key={product.id} style={productStyle}>
          <img src={product.image} alt={product.name} style={imageStyle} />
          <Button
            variant="primary"
            style={{ backgroundColor: '#FFA500', marginTop: '10px' }}
            onClick={() => handleButtonClick(product)}
          >
            <FontAwesomeIcon icon={faCoffee} className="me-2" />
            {`Comprar - $${product.price}`}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Page9;
