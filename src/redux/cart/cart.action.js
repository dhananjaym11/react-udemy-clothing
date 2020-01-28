import {CartActionType} from './cart.type'; 

export const addCartItem = cartItem => ({
	type: CartActionType.ADD_ITEM,
	payLoad: cartItem
})