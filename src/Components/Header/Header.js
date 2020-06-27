import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assest/logo.svg';
import './header.scss';
import { auth } from '../../firebase.utils';

import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';

import UserContext from '../../contexts/users/users.context';

import { CartContext } from '../../provider/cart/cartProvider';

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
} from './Header.style';;


const Header = () => {


    const currentUser = useContext(UserContext)
    const { hidden } = useContext(CartContext)


    return (

        <HeaderContainer>

            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>



            <OptionsContainer>


                <CartIcon />





                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/test'>CONTACT</OptionLink>


                {

                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>  Sign Out </div>
                        :
                        <Link className="option" to="/signin"> Sign In </Link>
                }




                {

                    hidden ? null : <CartDropDown />
                }


            </OptionsContainer>

        </HeaderContainer>
    )
}







export default (Header);


