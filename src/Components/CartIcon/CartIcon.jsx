import React, { useContext } from "react";
import "./carticon.scss";
import { ReactComponent as ShopingIcon } from "../../assest/shoppingcart.svg";
import { connect } from "react-redux";

import { CartContext } from "../../provider/cart/cartProvider";

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);

  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <ShopingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
