import React, { createContext } from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer
} from './collection.styles';
import CollectionItem from '../../Components/CollecionItem/CollectionItem';
import CollectionsContext from '../../contexts/collections/collections.context';



const CollectionPage = ({ match }) => {



    <CollectionsContext.Consumer>


        {
            collection => {

                const { title, items } = collection;

                return (
                    <CollectionPageContainer>
                        <CollectionTitle>{title}</CollectionTitle>

                        {items.map(item => (
                            <CollectionItem key={item.id} item={item} />
                        ))}


                    </CollectionPageContainer>
                )

            }
        }



    </CollectionsContext.Consumer>


};


export default CollectionPage;