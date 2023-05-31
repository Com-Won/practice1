import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item, authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  
  return (
    <div className='product-card' onClick={showDetail}>
      <img className='card-img' src={item?.img} alt="Product"></img>
      <div>{item.choice === true ? 'Concious Choice' : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item.new === true ? '신제품' : ''}</div>
    </div>
  );
}

export default ProductCard;
