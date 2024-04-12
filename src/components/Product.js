import React, { useEffect } from 'react';
import { Alert, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';

const Product = () => {
  const { data: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    // fetch('https://fakestoreapi.com/products')
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data));
  }, []);

  if (status === 'Loading') {
    return <p>Loading...</p>;
  }

  if (status === 'error') {
    return (
      <Alert key="danger" variant="danger">
        Some thing went wrong , try after some times
      </Alert>
    );
  }

  const addToCart = (product) => {
    //dispatch the add action
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div className="col-md-3" style={{ margin: '30px' }}>
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
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Products Dashboard </h1>
      <div className="row">{cards}</div>
    </>
  );
};

export default Product;
