import React, { useContext } from 'react';
import './cartdropdown.scss';
import CustomButton from '../CustomButton/CustomButton';

import CartItem from '../CartItem/CartItem';
import { withRouter } from 'react-router-dom'

import { CartContext } from '../../provider/cart/cartProvider';



const CartDropDown = ({ history }) => {
    const { cartItems, toggleHidden } = useContext(CartContext)

    return (
        <div className='cart-dropdown' >
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                        <span className='empty-message'>Your cart is empty</span>
                    )}
            </div>

            <CustomButton onClick={() => {
                history.push('/checkout');
                toggleHidden()
            }} >Go To Check Out</CustomButton>



        </div >


    )
}



export default withRouter(CartDropDown);