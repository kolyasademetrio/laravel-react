import {
    SET_VIDEOTIPS,
    SET_VIDEOTIPS_SUCCEEDED,
    SET_VIDEOTIPS_FAILED
} from '../actions/types/videotips-types';
import {SET_PRODUCTS, SET_PRODUCTS_FAILED, SET_PRODUCTS_SUCCEEDED} from "./types/product-types";

export const setAllVideotips = () => {
    return async dispatch => {
        dispatch({type: SET_VIDEOTIPS});
        axios.get('/api/videotips').then(({data: videotips}) => {
            dispatch({type: SET_VIDEOTIPS_SUCCEEDED, payload: videotips});
        }).catch(err => {
            dispatch({type: SET_PRODUCTS_FAILED, payload: err});
        });
    };
};