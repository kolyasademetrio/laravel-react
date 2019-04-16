import { SET_PRODUCTS, SET_IS_READY, FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_RECCOMENDED_PRODUCTS, FETCH_RECCOMENDED_PRODUCTS_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    isReady: false,
    isSingleReady: false,
    isCommentsReady: false,
    items: [],
    product: {},
    comments: [],
};

export default function (state = INITIAL_STATE,action){
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                items: action.payload,
                isReady: true
            };
        case 'SET_PRODUCT_SINGLE':
            return {
                ...state,
                product: action.payload,
                isSingleReady: true
            };
        case 'SET_PRODUCT_COMMENTS':
            return {
                ...state,
                comments: action.payload,
                isCommentsReady: true,
            };
        case SET_IS_READY:
            return {
                ...state,
                isReady: action.payload
            };
        default:
            return state;
    }
}