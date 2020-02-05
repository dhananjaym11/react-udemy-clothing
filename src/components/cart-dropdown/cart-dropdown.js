import React from 'react';

import CustomButton from '../custom-button/custom-button';

function CartDropdown ({showCartdown, cartItems}) {
	return (
		<div className="cart-dropdown" style={{display: showCartdown ? 'block' : 'none'}}>
			<div className="cart-items">
				<ul>
				{
					cartItems.map((item, i) => (
						<li key={i}>{item.name} {item.price} * {item.quality} = {item.price * item.quality}</li>
					))
				}
				</ul>
			</div>
			<CustomButton>Got to Checkout</CustomButton>
		</div>
	)
}

export default CartDropdown;