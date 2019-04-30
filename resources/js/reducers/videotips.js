import {
    SET_VIDEOTIPS,
    SET_VIDEOTIPS_SUCCEEDED,
    SET_VIDEOTIPS_FAILED,

    SET_VIDEOTIP_SINGLE,
    SET_VIDEOTIP_SINGLE_SUCCEEDED,
    SET_VIDEOTIP_SINGLE_FAILED,
} from '../actions/types/videotips-types';

const INITIAL_STATE = {
    isVideotipsLoading: false,
    isVideotipsReady: false,
    videotipsError: null,
    videotipsList: [],

    isVideotipSingleLoading: false,
    isVideotipSingleReady: false,
    videotipSingleError: null,
    videotipSingle: {},
};

export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case SET_VIDEOTIPS:
            return {
                ...state,
                isVideotipsLoading: true,
            };
        case SET_VIDEOTIPS_SUCCEEDED:
            return {
                ...state,
                videotipsList: action.payload.videotips,
                isVideotipsLoading: false,
                isVideotipsReady: true,
            };
        case SET_VIDEOTIPS_FAILED:
            return {
                ...state,
                isVideotipsLoading: false,
                isVideotipsReady: false,
                videotipsError: action.payload,
            };
        case SET_VIDEOTIP_SINGLE:
            return {
                ...state,
                isVideotipSingleLoading: true,
            };
        case SET_VIDEOTIP_SINGLE_SUCCEEDED:
            return {
                ...state,
                isVideotipSingleLoading: false,
                isVideotipSingleReady: true,
                videotipSingle: action.payload,
            };
        case SET_VIDEOTIP_SINGLE_FAILED:
            return {
                ...state,
                videotipSingleError: action.payload,
            };
        default:
            return state;

    }
}

