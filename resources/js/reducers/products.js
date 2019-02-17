const initialState = [
    {
        id: 1,
        title: 'Is the product #1'
    }
];

export default (state = initialState, action) => {
    switch ( action.type ) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            };
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload
                ]
            };
        default:
            return {
                state
            };
    }
}