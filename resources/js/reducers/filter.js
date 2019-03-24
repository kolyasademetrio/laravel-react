const initialState = {
    searchQuery: "",
    filterBy: "",
    filterShopBy: "all",
    filterProductShopBy: "price_asc",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SORT_PRODUCTS_SHOP":
            return {
                ...state,
                sortProductShopBy: action.payload
            }
        case "SHOW_PRODUCTS_BY_CATEGORY_SHOP":
            return {
                ...state,
                filterShopBy: action.payload,
                page: 1,
            };
        case "SET_FILTER":
            return {
                ...state,
                filterBy: action.payload
            };
        case 'SET_PAGINATION':
            return {
                ...state,
                page: action.payload
            }
        default:
            return state;

    }
};
