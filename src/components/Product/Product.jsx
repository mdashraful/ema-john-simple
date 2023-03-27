import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product)
    const { img, name, price, seller, quantity, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
        </div>
    );
};

export default Product;