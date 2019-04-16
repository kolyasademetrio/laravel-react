import { SET_PRODUCTS, SET_PRODUCT_SINGLE, SET_PRODUCT_COMMENTS, SHOW_ALL, BESTSELLER, FACE, BODY, SCRUB } from './types';

export const setProducts = products => ({
    type: SET_PRODUCTS,
    payload: products
});

export const setProductSingle = product => ({
    type: SET_PRODUCT_SINGLE,
    payload: product
});

export const setProductComments = comments => ({
    type: SET_PRODUCT_COMMENTS,
    payload: comments
});

export const CategoryFilters = {
    SHOW_ALL: SHOW_ALL,
    BESTSELLER: BESTSELLER,
    FACE: FACE,
    BODY: BODY,
    SCRUB: SCRUB,
};