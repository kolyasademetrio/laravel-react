import { combineReducers } from 'redux';
import productsReducer from './products';
import cartReducer from './cart';
import productFilter from './filter';
import paginationReducer from './pagination';
import videotipsReducer from './videotips';

export default combineReducers({
    products: productsReducer,
    cart: cartReducer,
    filter: productFilter,
    pagination: paginationReducer,
    videotips: videotipsReducer
});