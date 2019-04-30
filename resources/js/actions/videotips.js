import {
    SET_VIDEOTIPS,
    SET_VIDEOTIPS_SUCCEEDED,
    SET_VIDEOTIPS_FAILED,

    SET_VIDEOTIP_SINGLE,
    SET_VIDEOTIP_SINGLE_SUCCEEDED,
    SET_VIDEOTIP_SINGLE_FAILED,
} from '../actions/types/videotips-types';

export const setAllVideotips = () => {
    return async dispatch => {
        dispatch({type: SET_VIDEOTIPS});
        axios.get('/api/videotips').then(({data: videotips}) => {
            dispatch({type: SET_VIDEOTIPS_SUCCEEDED, payload: videotips});
        }).catch(err => {
            dispatch({type: SET_VIDEOTIPS_FAILED, payload: err});
        });
    };
};

export const setSingleVideotip = (slug) => {
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