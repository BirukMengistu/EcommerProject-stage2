import React from 'react';
import './collectionperview.styles.scss';
import CollectionItem from '../collection-item/collection-item.comp';
 const CollectionPerview = ({title,items}) => (

    
     
     <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
                <div className='preview'>
                 {
                     items
                     .filter((item,idx) =>(idx <4))
                     .map(({id , ...otherItemProps}) =>(<CollectionItem key={id} {...otherItemProps}/>))
                 }
                

            </div>
                
            </div>
    
 );

export default CollectionPerview;