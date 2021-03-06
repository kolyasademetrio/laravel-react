import { combineReducers } from 'redux';
import pagesReducer from './pages';
import productsReducer from './products';
import cartReducer from './cart';
import productFilter from './filter';
import paginationReducer from './pagination';
import videotipsReducer from './videotips';
import stocksReducer from './stocks';
import doyouknowsReducer from './doyouknows';

export default combineReducers({
    pages: pagesReducer,
    products: productsReducer,
    cart: cartReducer,
    filter: productFilter,
    pagination: paginationReducer,
    videotips: videotipsReducer,
    stocks: stocksReducer,
    doyouknows: doyouknowsReducer,
});