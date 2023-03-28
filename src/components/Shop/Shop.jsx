import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];

        setCart(newCart);
    }

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await axios.get('products.json')
                // const data = await res.json();
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        loadData();
        /* fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data)) */
    }, []);

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map((product) => <Product product={product} handleAddToCart={handleAddToCart} key={product.id}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;