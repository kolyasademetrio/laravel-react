import {
    SET_STOCKS,
    SET_STOCKS_SUCCEEDED,
    SET_STOCKS_FAILED,

    SET_SINGLE_STOCKS,
    SET_SINGLE_STOCKS_SUCCEEDED,
    SET_SINGLE_STOCKS_FAILED,
} from '../actions/types/stocks-types';

const INITIAL_STATE = {
    isStocksReady: false,
    isStocksLoading: false,
    stocksErrors: null,
    stocksData: [],

    isStockSingleReady: false,
    isStockSingleLoading: false,
    stockSingleErrors: null,
    stockSingleData: [],
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

        case SET_SINGLE_STOCKS:
            return {
                ...state,
                isStockSingleLoading: true,
            };
        case SET_SINGLE_STOCKS_SUCCEEDED:
            return {
                ...state,
                isStockSingleLoading: false,
                isStockSingleReady: true,
                stockSingleData: action.payload,
            };
        case SET_SINGLE_STOCKS_FAILED:
            return {
                ...state,
                isStockSingleLoading: false,
                isStockSingleReady: false,
                stockSingleErrors: action.payload,
            };
        default:
            return state;
    }
}