export { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    productsList:{products:[],error:null,loading:false},
    newProduct:{post:null,error:null,loading:false},
    deletedProduct:{post:null,error:null,loading:false},
    editProduct:{post:null,error:null,loading:false},
    activeProduct:{post:null,error:null,loading:false},
    updateProduct:{post:null,error:null,loading:false},
};


export default function (state = INITIAL_STATE,action){
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return { ...state, productsList:{products:[],error:null,loading:true}};
        case 'FETCH_PRODUCTS_SUCCESS':
            return { ...state, productsList:{products:action.payload.data,error:null,loading:false}};
        default:
            return state;
    }
}

/*
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
}*/
