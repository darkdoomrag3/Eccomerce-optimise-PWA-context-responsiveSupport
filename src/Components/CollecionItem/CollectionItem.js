import React, { useContext } from 'react'
import './collectionitem.scss'
import CustomButton from '../CustomButton/CustomButton'

import { CartContext } from '../../provider/cart/cartProvider';

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
} from './CollectionItem.style';

const CollectionItem = ({ item }) => {
    const { name, price, imageUrl } = item
    const { addItem } = useContext(CartContext);
    return (
        <CollectionItemContainer>
            <BackgroundImage
                className='image'
                style={{ backgroundImage: `url(${imageUrl})` }}
            />

            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <CustomButton onClick={() => addItem(item)
            } inverted>Add to Cart</CustomButton>

        </CollectionItemContainer>
    )
}



export default CollectionItem;
