import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        // let newCart = [...cart, product];
        let newCart = [];

        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);

        addToDb(product.id);
    }

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id of the addedProduct
        for (const id in storedCart) {
            // step 2: get product from products state by using id
            const addedProduct = products.find((product) => product.id === id);

            if (addedProduct) {
                // step 3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // console.log(addedProduct);
                savedCart.push(addedProduct);
            }
            setCart(savedCart);
        }
    }, [products]);

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