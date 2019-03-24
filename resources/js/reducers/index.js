import { combineReducers } from 'redux';
import productsReducer from './products';
import cartReducer from './cart';
import productFilter from './filter';
import paginationReducer from './pagination';

export default combineReducers({
    products: productsReducer,
    cart: cartReducer,
    filter: productFilter,
    pagination: paginationReducer,
});