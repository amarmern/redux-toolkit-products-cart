import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';

function Cart() {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeToCart = (id) => {
    dispatch(remove(id));
  };
  const cards = cartProducts.map((product) => (
    <div className="col-md-1" style={{ margin: '30px' }}>
      <Card style={{ width: '18rem' }} key={product.id} className="h-100">
        <div style={{ textAlign: 'center' }}>
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: '100px', height: '130px' }}
          />
        </div>

        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
        </Card.Body>

        <Card.Footer style={{ backgroundColor: 'white' }}>
          <Button variant="danger" onClick={() => removeToCart(product.id)}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Cart details</h1>
      <div>{cards}</div>
    </>
  );
}

export default Cart;
