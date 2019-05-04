const INITIAL_STATE = {
    isStocksReady: false,
    isStocksLoading: false,
    stocksErrors: null,
    stocksList: [],
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
                isSingleReady: true,
                stocksList: action.payload,
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