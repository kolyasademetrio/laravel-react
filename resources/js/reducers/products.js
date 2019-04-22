import {
    SET_PRODUCTS,
    SET_PRODUCT_SINGLE,
    SET_PRODUCT_BY_SLUG,
    SET_PRODUCT_BY_SLUG_SUCCEEDED,
    SET_PRODUCT_BY_SLUG_FAILED,
    SET_PRODUCT_COMMENTS
} from '../actions/types';

const INITIAL_STATE = {
    isReady: false,
    isSingleReady: false,
    isSingleLoading: false,
    isCommentsReady: false,
    items: [],
    product: {},
    comments: [],
    error: null,
};

export default function (state = INITIAL_STATE,action){
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                items: action.payload,
                isReady: true
            };
        case SET_PRODUCT_SINGLE:
            return {
                ...state,
                product: action.payload,
                isSingleReady: true,
            };
        case SET_PRODUCT_BY_SLUG:
            return {
                ...state,
                isSingleReady: false,
                isSingleLoading: true,
                error: null,
            };

        case SET_PRODUCT_BY_SLUG_SUCCEEDED:
            return {
                ...state,
                product: action.payload,
                isSingleReady: true,
                isSingleLoading: false,
                error: null,
            };

        case SET_PRODUCT_BY_SLUG_FAILED:
            return {
                ...state,
                isSingleReady: false,
                isSingleLoading: false,
                error: action.payload,
            };

        case SET_PRODUCT_COMMENTS:
            return {
                ...state,
                comments: action.payload,
                isCommentsReady: true,
            };
        default:
            return state;
    }
}