import {
    SET_PAGES_LIST,
    SET_PAGES_LIST_SUCCEEDED,
    SET_PAGES_LIST_FAILED
} from '../actions/types/pages-types';

const INITIAL_STATE = {
    isPagesReady: false,
    isPagesLoading: false,
    pagesError: null,
    items: [],
};

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case SET_PAGES_LIST:
            return {
                ...state,
                isPagesLoading: true,
            };
        case SET_PAGES_LIST_SUCCEEDED:
            return {
                ...state,
                isPagesLoading: false,
                isPagesReady: true,
                items: action.payload,
            };
        case SET_PAGES_LIST_FAILED:
            return {
                ...state,
                isPagesLoading: false,
                isPagesReady: false,
                pagesError: action.payload,
            };
        default:
            return state;
    }
}