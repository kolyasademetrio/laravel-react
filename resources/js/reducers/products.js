import { SET_PRODUCTS, SET_PRODUCT_SINGLE, SET_PRODUCT_COMMENTS} from '../actions/types';

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
        case SET_PRODUCT_SINGLE:
            return {
                ...state,
                product: action.payload,
                isSingleReady: true
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