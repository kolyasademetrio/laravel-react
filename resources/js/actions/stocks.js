import {
    SET_STOCKS,
    SET_STOCKS_SUCCEEDED,
    SET_STOCKS_FAILED
} from './types/stocks-types';

import {sortArrayByKey} from "../helpers/sortArrayByKey";

export const setAllStocks = () => {
    return async dispatch => {
        dispatch({type: SET_STOCKS});
        axios.get('/api/stocks').then(({data: {stocksList, stockAttachment}}) => {
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