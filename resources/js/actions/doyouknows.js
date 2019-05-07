import {
    SET_DOYOUKNOWS,
    SET_DOYOUKNOWS_SUCCEEDED,
    SET_DOYOUKNOWS_FAILED,

    SET_SINGLE_DOYOUKNOW,
    SET_SINGLE_DOYOUKNOW_SUCCEEDED,
    SET_SINGLE_DOYOUKNOW_FAILED
} from './types/doyouknow-types';

import {sortArrayByKey} from "../helpers/sortArrayByKey";

export const setAllDoyouknow = () => {
    return async dispatch => {
        dispatch({type: SET_DOYOUKNOWS});
        axios.get('/api/doyouknow').then(({data: {doyouknowsList, doyouknowAttachment}}) => {
            const doyouknowAttachmentList = doyouknowAttachment && sortArrayByKey(doyouknowAttachment,'doyouknow_id');
            const doyouknowsData = {
                doyouknowsList,
                doyouknowAttachment: doyouknowAttachmentList,
            };
            dispatch({type: SET_DOYOUKNOWS_SUCCEEDED, payload: doyouknowsData});
        }).catch(err => {
            dispatch({type: SET_DOYOUKNOWS_FAILED, payload: err});
        });
    }
};