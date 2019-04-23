import {
    SET_PRODUCTS,
    SET_PRODUCT_SINGLE,
    SET_PRODUCT_BY_SLUG,
    SET_PRODUCT_BY_SLUG_SUCCEEDED,
    SET_PRODUCT_BY_SLUG_FAILED,
    SET_PRODUCT_COMMENTS,
    SHOW_ALL,
    BESTSELLER,
    FACE,
    BODY,
    SCRUB
} from './types';

export const setProducts = products => ({
    type: SET_PRODUCTS,
    payload: products
});

export const setProductComments = comments => ({
    type: SET_PRODUCT_COMMENTS,
    payload: comments
});

export const setProductBySlug = slug => {
    return async dispatch => {
        dispatch({ type: SET_PRODUCT_BY_SLUG });

        axios.get(`/api/products/${slug}`)
            .then(({data}) => {
                if(data.product){
                    dispatch({ type: SET_PRODUCT_BY_SLUG_SUCCEEDED, payload: data });
                } else {
                    dispatch({ type: SET_PRODUCT_BY_SLUG_FAILED, payload: 404 });
                }
            }).catch(err => {
                dispatch({ type: SET_PRODUCT_BY_SLUG_FAILED, payload: err });
            });

        /*try {
            const { data } = await axios.get(`/api/products/${slug}`);

            if(data.product){
                dispatch({ type: SET_PRODUCT_BY_SLUG_SUCCEEDED, payload: data });
            } else {
                dispatch({ type: SET_PRODUCT_BY_SLUG_FAILED, payload: 404 });
            }
        } catch (err) {
            dispatch({ type: SET_PRODUCT_BY_SLUG_FAILED, payload: err });
        }*/
    };
}

export const CategoryFilters = {
    SHOW_ALL: SHOW_ALL,
    BESTSELLER: BESTSELLER,
    FACE: FACE,
    BODY: BODY,
    SCRUB: SCRUB,
};