import React from 'react';
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'
const Product = ({ name, image, price }) => {
  const url= image && image.url;
  return (
    <article className="product">
      <img src={url || defaultImage}  />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  );
};
Product.defaultProps={
  image:defaultImage,
  name:'default name',
  price:0
}
export default Product;
