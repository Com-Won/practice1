import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

const ProductAllPage = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('q') || '';

  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/Com-Won/practice1/products/?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [searchQuery]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu, index) => (
            <Col xs={3} key={index}>
              <ProductCard authenticate={authenticate} setAuthenticate={setAuthenticate} item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAllPage;
