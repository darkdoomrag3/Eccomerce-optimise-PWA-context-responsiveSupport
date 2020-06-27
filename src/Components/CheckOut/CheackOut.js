import React, { useContext } from 'react'
import './checkout.scss'
import { connect } from 'react-redux'
import ChekoutItem from '../ChekOutItem/ChekoutItem';
import { CartContext } from '../../provider/cart/cartProvider';

const CheackOut = () => {

    const { cartItems } = useContext(CartContext);

    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => (
                <ChekoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className='total'>TOTAL: ${}</div>


        </div>
    );


}


export default (CheackOut)
