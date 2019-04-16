import {SET_PAGINATION} from '../actions/types';

const initialState = {
    page: 1,
}

export default (state = initialState, action) => {
    switch(action.type){
        case SET_PAGINATION:
            return {
                ...state,
                page: action.payload
            }
        default:
            return state;
    }
}