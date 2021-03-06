import {
    SET_PRODUCTS,
    SET_PRODUCTS_SUCCEEDED,
    SET_PRODUCTS_FAILED,
    SET_PRODUCT_BY_SLUG,
    SET_PRODUCT_BY_SLUG_SUCCEEDED,
    SET_PRODUCT_BY_SLUG_FAILED,
    SET_PRODUCT_COMMENTS,
    SET_PRODUCT_COMMENTS_SUCCEEDED,
    SET_PRODUCT_COMMENTS_FAILED,
    REMOVE_COMMENT_BY_ID, ADD_PRODUCT_COMMENT,
} from '../actions/types/product-types';

const INITIAL_STATE = {
    isProductsReady: false,
    isProductsLoading: false,
    productsError: null,
    items: [],

    isSingleReady: false,
    isSingleLoading: false,
    singleProductError: null,
    product: {},

    isCommentsReady: false,
    isCommentsLoading: false,
    productCommentsError: null,
    comments: [],
};

export default function (state = INITIAL_STATE,action){
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                isProductsReady: false,
                isProductsLoading: true,
            };
        case SET_PRODUCTS_SUCCEEDED:
            return {
                ...state,
                items: action.payload,
                isProductsReady: true,
                isProductsLoading: false,
            };
        case SET_PRODUCTS_FAILED:
            return {
                ...state,
                isProductsReady: false,
                isProductsLoading: false,
                productsError: action.payload
            };
        case SET_PRODUCT_BY_SLUG:
            return {
                ...state,
                isSingleReady: false,
                isSingleLoading: true,
            };

        case SET_PRODUCT_BY_SLUG_SUCCEEDED:
            return {
                ...state,
                product: action.payload,
                isSingleReady: true,
                isSingleLoading: false,
            };

        case SET_PRODUCT_BY_SLUG_FAILED:
            return {
                ...state,
                isSingleReady: false,
                isSingleLoading: false,
                singleProductError: action.payload,
            };

        case SET_PRODUCT_COMMENTS:
            return {
                ...state,
                isCommentsReady: false,
                isCommentsLoading: true,
                productCommentsError: null,
            };
        case SET_PRODUCT_COMMENTS_SUCCEEDED:
            return {
                ...state,
                comments: action.payload,
                isCommentsReady: true,
                isCommentsLoading: false,
                productCommentsError: null,
            };
        case SET_PRODUCT_COMMENTS_FAILED:
            return {
                ...state,
                isCommentsReady: false,
                isCommentsLoading: false,
                productCommentsError: action.payload,
            };
        case REMOVE_COMMENT_BY_ID:
            const allCommentsWithoutRemoved = state.comments.allComments.filter(c => c.id != action.payload);
            return {
                ...state,
                comments: {
                    ...state.comments,
                    allComments: allCommentsWithoutRemoved,
                    commentsLength: allCommentsWithoutRemoved.length,
                },
            };
        case ADD_PRODUCT_COMMENT:
            const allCommentsWithAdded = [
                ...state.comments.allComments,
                action.payload,
            ];
            return {
                ...state,
                comments: {
                    ...state.comments,
                    allComments: allCommentsWithAdded,
                    commentsLength: allCommentsWithAdded.length,
                },
            };
        default:
            return state;
    }
}