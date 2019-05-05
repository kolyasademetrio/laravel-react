import {
    SET_STOCKS,
    SET_STOCKS_SUCCEEDED,
    SET_STOCKS_FAILED
} from '../actions/types/stocks-types';

const INITIAL_STATE = {
    isStocksReady: false,
    isStocksLoading: false,
    stocksErrors: null,
    stocksData: [],
};

export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case SET_STOCKS:
            return {
                ...state,
                isStocksLoading: true,
            };
        case SET_STOCKS_SUCCEEDED:
            return {
                ...state,
                isStocksLoading: false,
                isStocksReady: true,
                stocksData: action.payload,
            };
        case SET_STOCKS_FAILED:
            return {
                ...state,
                isStocksLoading: false,
                isStocksReady: false,
                stocksErrors: action.payload,
            };
        default:
            return state;
    }
}