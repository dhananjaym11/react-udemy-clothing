import React from 'react';

import CustomButton from '../custom-button/custom-button';

function CollectionItem ({item, addItems}) {
	const {name, imageUrl, price} = item;
	return (
		<div className="collection-item">
			<div 
				className="image"
				style={{backgroundImage: `url(${imageUrl})`}} >
				<div className="collection-footer">
					<span className="title">{name}</span>
					<span className="price">{price}</span>
					<div><CustomButton onClick={()=>addItems(item)}>Add to Cart</CustomButton></div>
				</div>
			</div>
		</div>
	)
}

export default CollectionItem;