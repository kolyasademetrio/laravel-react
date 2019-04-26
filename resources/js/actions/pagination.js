import {SET_PAGINATION} from './types/product-types';

export const setPagination = (page) => ({
    type: SET_PAGINATION,
    payload: page,
});