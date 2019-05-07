import {
    SET_STOCKS,
    SET_STOCKS_SUCCEEDED,
    SET_STOCKS_FAILED,

    SET_SINGLE_STOCKS,
    SET_SINGLE_STOCKS_SUCCEEDED,
    SET_SINGLE_STOCKS_FAILED,
} from './types/stocks-types';

import {sortArrayByKey} from "../helpers/sortArrayByKey";
import {SET_VIDEOTIP_SINGLE, SET_VIDEOTIP_SINGLE_FAILED, SET_VIDEOTIP_SINGLE_SUCCEEDED} from "./types/videotips-types";

export const setAllStocks = (slug) => {
    return async dispatch => {
        dispatch({type: SET_STOCKS});
        axios.get(`/api${slug}`).then(({data: {stocksList, stockAttachment}}) => {
            const stockAttachmentList = stockAttachment && sortArrayByKey(stockAttachment,'stock_id');
            const stocksData = {
                stocksList,
                stockAttachment: stockAttachmentList,
            };
            dispatch({type: SET_STOCKS_SUCCEEDED, payload: stocksData});
        }).catch(err => {
            dispatch({type: SET_STOCKS_FAILED, payload: err});
        });
    };
};

export const setSingleStock = slug => {
    return async dispatch => {
        dispatch({type: SET_SINGLE_STOCKS});
        axios.get(`/api/stocks/${slug}`).then(({data}) => {
            dispatch({type: SET_SINGLE_STOCKS_SUCCEEDED, payload: data});
        }).catch(err => {
            dispatch({type: SET_SINGLE_STOCKS_FAILED, payload: 404});
        });
    }
}

export const setSingleVideotip = slug => {
    return async dispatch => {
        dispatch({type: SET_VIDEOTIP_SINGLE});
        axios.get(`/api/videotips/${slug}`).then(data => {
            const {videotip} = data.data;
            if (videotip) {
                dispatch({type: SET_VIDEOTIP_SINGLE_SUCCEEDED, payload: videotip});
            } else {
                dispatch({type: SET_VIDEOTIP_SINGLE_FAILED, payload: 404});
            }
        }).catch(err => {
            dispatch({type: SET_VIDEOTIP_SINGLE_FAILED, payload: 404});
        });
    };
};