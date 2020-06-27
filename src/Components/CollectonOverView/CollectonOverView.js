import React from 'react'
import './CollectonOverView.scss'
import CollectionsPreview from '../CollectionsPreview/CollectionsPreview'

const CollectonOverView = ({ collections }) => {
    return (
        <div className='collections-overview'>
            {
                items.filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
            }


        </div>
    )
}

export default CollectonOverView;
