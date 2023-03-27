import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product)
    const { img, name, price, seller, quantity, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-body'>
                <h6 className='product-name'>{name}</h6>
                <p style={{ marginBottom: '30px' }}>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} star</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;