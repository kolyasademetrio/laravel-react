const initialState = {
    searchQuery: "",
    filterBy: "",
    filterShopBy: "all",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_FILTER_SHOP":
            return {
                ...state,
                filterShopBy: action.payload
            };
        case "SET_FILTER":
            return {
                ...state,
                filterBy: action.payload
            };
        default:
            return state;
    }
};
