import {
    SET_PAGES_LIST,
    SET_PAGES_LIST_SUCCEEDED,
    SET_PAGES_LIST_FAILED
} from './types/pages-types';

export const setAllPages = () => {
    return async dispatch => {
        dispatch({type: SET_PAGES_LIST});
        axios.get('/api/pages').then(({data}) => {
            dispatch({type: SET_PAGES_LIST_SUCCEEDED, payload: data});
        }).catch(err => {
            dispatch({type: SET_PAGES_LIST_FAILED, payload: err});
        });
    }
};