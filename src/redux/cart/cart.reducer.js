import {CartActionType} from './cart.type'; 

const INITIAL_STATE = {
	cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
        case CartActionType.ADD_ITEM:
            return { ...state, cartItems: [...state.cartItems, action.payLoad] };
        default:
            return state;
    }
}

export default cartReducer;