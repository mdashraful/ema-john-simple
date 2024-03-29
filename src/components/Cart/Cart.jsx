import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart, handleClearCart, children }) => {
    // console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    let totalQuantity = 0;

    for (const product of cart) {
        product.quantity = product.quantity || 1;

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        totalQuantity = totalQuantity + product.quantity;
    }

    const tax = totalPrice * 7 / 100;

    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4 style={{ textAlign: 'center', fontSize: '30px' }}>Order Summery</h4>
            <p>Selected Item: {totalQuantity}</p>
            <p>Total Price: $ {totalPrice}</p>
            <p>Total Shipping: $ {totalShipping}</p>
            <p>Tax: $ {tax.toFixed(2)}</p>
            <h4>Grand Total: $ {grandTotal.toFixed(2)}</h4>
            <button className='btn-clear-cart' onClick={handleClearCart} >
                <span>Clear Cart</span>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>

            {children}

        </div>
    );
};

export default Cart;