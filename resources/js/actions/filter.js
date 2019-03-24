export const setFilter = filter => ({
    type: 'SET_FILTER',
    payload: filter,
});

export const showProductsByCategory = filter => ({
    type: 'SHOW_PRODUCTS_BY_CATEGORY_SHOP',
    payload: filter,
});

export const sortProduct = filter => ({
    type: 'SORT_PRODUCTS_SHOP',
    payload: filter,
});

export const setPagination = (page) => ({
    type: 'SET_PAGINATION',
    payload: page,
});
