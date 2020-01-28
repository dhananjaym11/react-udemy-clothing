
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const rootReducer = combineReducers({
    userReducer: userReducer,
    cartReducer: cartReducer,
});

export default rootReducer;