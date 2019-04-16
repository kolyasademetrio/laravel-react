import {SET_PAGINATION} from './types';

export const setPagination = (page) => ({
    type: SET_PAGINATION,
    payload: page,
});