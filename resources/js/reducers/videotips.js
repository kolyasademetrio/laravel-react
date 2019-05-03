import {
    SET_VIDEOTIPS,
    SET_VIDEOTIPS_SUCCEEDED,
    SET_VIDEOTIPS_FAILED,

    SET_VIDEOTIP_SINGLE,
    SET_VIDEOTIP_SINGLE_SUCCEEDED,
    SET_VIDEOTIP_SINGLE_FAILED,

    SET_VIDEOTIP_SINGLE_ON_HOMEPAGE,
    SET_VIDEOTIP_SINGLE_ON_HOMEPAGE_SUCCEEDED,
    SET_VIDEOTIP_SINGLE_ON_HOMEPAGE_FAILED,
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

    isVideotipSingleOnHomepageLoading: false,
    isVideotipSingleOnHomepageReady: false,
    videotipSingleOnHomepageError: null,
    videotipSingleOnHomepage: {},
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
        case SET_VIDEOTIP_SINGLE_ON_HOMEPAGE:
            return {
                ...state,
                isVideotipSingleOnHomepageLoading: true,
            };
        case SET_VIDEOTIP_SINGLE_ON_HOMEPAGE_SUCCEEDED:
            return {
                ...state,
                isVideotipSingleOnHomepageLoading: false,
                isVideotipSingleOnHomepageReady: true,
                videotipSingleOnHomepage: action.payload,
            };
        case SET_VIDEOTIP_SINGLE_ON_HOMEPAGE_FAILED:
            return {
                ...state,
                videotipSingleOnHomepageError: action.payload,
            };
        default:
            return state;

    }
}

