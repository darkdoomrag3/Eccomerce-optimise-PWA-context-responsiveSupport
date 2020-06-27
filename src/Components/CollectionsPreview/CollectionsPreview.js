import React from 'react'
import './collectionspreview.scss'
import CollectionItem from '../CollecionItem/CollectionItem';
import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
} from './CollectionPreview.style';


const CollectionsPreview = ({ title, items, match }) => (

    <CollectionPreviewContainer>
        <TitleContainer >{title.toUpperCase()}</TitleContainer>
        <PreviewContainer>
            {
                items.filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
)


export default CollectionsPreview;
