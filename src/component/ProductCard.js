import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item, authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className='product-card' onClick={showDetail}>
      <img className='card-img' src={item?.img} alt="Product" /> {/* img 요소에 alt 속성 추가 */}
      <div>{item.choice === true ? 'Conscious Choice' : ''}</div> {/* 오타 수정: 'Concious' -> 'Conscious' */}
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item.new === true ? '신제품' : ''}</div> {/* 오타 수정: '신제품' -> 'New' */}
    </div>
  );
};

export default ProductCard;
