import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await axios.get('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
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
                    products.map((product) => <Product product={product} key={product.id}></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order Summery</h4>
            </div>
        </div>
    );
};

export default Shop;