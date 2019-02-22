import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS } from '../actions/types';

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
        case FETCH_PRODUCTS:
            return { ...state, productsList:{products:[],error:null,loading:true}};
        case FETCH_PRODUCTS_SUCCESS:
            return { ...state, productsList:{products:action.payload.data,error:null,loading:false}};
        default:
            return state;
    }
}