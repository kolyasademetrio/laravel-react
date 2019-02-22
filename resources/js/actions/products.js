import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS } from './types';

export function fetchProducts(){
    return dispatch => {
        dispatch({type: FETCH_PRODUCTS});

        axios.get(`/api/products`)
                .then(response =>{
                    dispatch(fetchProductsSuccess(response));
                })
    }
}

export function fetchProductsSuccess(products){
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    };
}