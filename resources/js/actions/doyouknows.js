import {
    SET_DOYOUKNOWS,
    SET_DOYOUKNOWS_SUCCEEDED,
    SET_DOYOUKNOWS_FAILED,

    SET_SINGLE_DOYOUKNOW,
    SET_SINGLE_DOYOUKNOW_SUCCEEDED,
    SET_SINGLE_DOYOUKNOW_FAILED
} from './types/doyouknow-types';

import {sortArrayByKey} from "../helpers/sortArrayByKey";
import {SET_SINGLE_STOCKS, SET_SINGLE_STOCKS_FAILED, SET_SINGLE_STOCKS_SUCCEEDED} from "./types/stocks-types";

export const setAllDoyouknows = () => {
    return async dispatch => {
        dispatch({type: SET_DOYOUKNOWS});
        axios.get('/api/doyouknow').then(({data: {doyouknowsList, doyouknowsAttachment}}) => {
            const doyouknowAttachmentList = doyouknowsAttachment && sortArrayByKey(doyouknowsAttachment,'doyouknow_id');
            const doyouknowsData = {
                doyouknowsList,
                doyouknowsAttachment: doyouknowAttachmentList,
            };
            dispatch({type: SET_DOYOUKNOWS_SUCCEEDED, payload: doyouknowsData});
        }).catch(err => {
            dispatch({type: SET_DOYOUKNOWS_FAILED, payload: err});
        });
    }
};

export const setSingleDoyouknow = slug => {
    return async dispatch => {
        dispatch({type: SET_SINGLE_DOYOUKNOW});
        axios.get(`/api/doyouknow/${slug}`).then(({data}) => {
            dispatch({type: SET_SINGLE_DOYOUKNOW_SUCCEEDED, payload: data});
        }).catch(err => {
            dispatch({type: SET_SINGLE_DOYOUKNOW_FAILED, payload: 404});
        });
    }
}