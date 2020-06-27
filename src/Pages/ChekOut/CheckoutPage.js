import React, { useContext } from 'react'
import { CartContext } from '../../provider/cart/cartProvider';
import ChekoutItem from '../../Components/ChekOutItem/ChekoutItem';
import './CheckoutPage.scss'

const CheckoutPage = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

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
            <div className='total'>TOTAL: ${cartTotal}</div>

        </div>
    );
}

export default CheckoutPage
