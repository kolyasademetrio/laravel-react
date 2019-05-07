import {
    SET_DOYOUKNOWS,
    SET_DOYOUKNOWS_SUCCEEDED,
    SET_DOYOUKNOWS_FAILED,

    SET_SINGLE_DOYOUKNOW,
    SET_SINGLE_DOYOUKNOW_SUCCEEDED,
    SET_SINGLE_DOYOUKNOW_FAILED,
} from '../actions/types/doyouknow-types';

const INITIAL_STATE = {
    isDoyouknowsReady: false,
    isDoyouknowsLoading: false,
    doyouknowsErrors: null,
    doyouknowsData: [],

    isDoyouknowSingleReady: false,
    isDoyouknowSingleLoading: false,
    doyouknowSingleErrors: null,
    doyouknowSingleData: [],
};

export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case SET_DOYOUKNOWS:
            return {

            };
        case SET_DOYOUKNOWS_SUCCEEDED:
            return {
                ...state,
                isDoyouknowsLoading: false,
                isDoyouknowsReady: true,
                doyouknowsData: action.payload,
            };
        case SET_DOYOUKNOWS_FAILED:
            return {
                ...state,
                isDoyouknowsLoading: false,
                isDoyouknowsReady: false,
                doyouknowsErrors: action.payload,
            };

        case SET_SINGLE_DOYOUKNOW:
            return {
                ...state,
                isDoyouknowSingleLoading: true,
            };
        case SET_SINGLE_DOYOUKNOW_SUCCEEDED:
            return {
                ...state,
                isDoyouknowSingleLoading: false,
                isDoyouknowSingleReady: true,
                doyouknowsData: action.payload,
            };
        case SET_SINGLE_DOYOUKNOW_FAILED:
            return {
                ...state,
                isDoyouknowSingleLoading: false,
                isDoyouknowSingleReady: false,
                doyouknowsErrors: action.payload,

            };
        default:
            return state;
    }
}