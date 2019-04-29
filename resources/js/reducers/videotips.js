import {
    SET_VIDEOTIPS,
    SET_VIDEOTIPS_SUCCEEDED,
    SET_VIDEOTIPS_FAILED
} from '../actions/types/videotips-types';

const INITIAL_STATE = {
    isVideotipsLoading: false,
    isVideotipsReady: false,
    videotipsError: null,
    videotipsList: [],
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
        default:
            return state;

    }
}

