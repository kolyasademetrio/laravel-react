export const setPagination = (products, startIndex, endIndex) => ({
    type: 'SET_PAGINATION',
    payload: {
        products: products,
        startIndex: startIndex,
        endIndex: endIndex,
    }
});