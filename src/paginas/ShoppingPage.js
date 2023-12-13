import React, { useState, useEffect } from 'react';
import Page9 from '../componentes/Page9';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { Page12 } from '../componentes/Page12';
import { Pie } from '../componentes/Pie';

const ShoppingPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const navigate = useNavigate();

  const handleAddToWishlist = (selectedProduct) => {
    setWishlist((prevWishlist) => [...prevWishlist, { ...selectedProduct, id: Date.now() }]);
    console.log('Producto añadido a la lista de deseos:', selectedProduct);
  };

  const handleAddToShoppingList = (selectedProduct) => {
    setShoppingList((prevShoppingList) => [...prevShoppingList, { ...selectedProduct, id: Date.now() }]);
    console.log('Producto añadido a la lista de compras:', selectedProduct);
  };

  const handleVerPedido = () => {
    // Puedes realizar acciones adicionales aquí antes de ir a la página de pedido
    console.log('Ver pedido');
    
    // Redirige a la página de pedido
    navigate('/pedido');
  };

  useEffect(() => {
    console.log('Wishlist actualizada:', wishlist);
  }, [wishlist]);

  useEffect(() => {
    console.log('ShoppingList actualizada:', shoppingList);
  }, [shoppingList]);

  return (
    <div>
      <h2>Lista de Compras</h2>
      <Page9 addToWishlist={handleAddToWishlist} addToShoppingList={handleAddToShoppingList} />
      
      <h3>Lista de Compras:</h3>
      <Row>
        {shoppingList.map((product) => (
          <Col key={product.id} xs={12} md={4} lg={3}>
            <Card style={{ marginBottom: '15px' }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Button variant="primary" onClick={handleVerPedido}>
        Ver Pedido
      </Button>
      <Page12></Page12>
      <Pie></Pie>
    </div>
  );
};

export default ShoppingPage;
