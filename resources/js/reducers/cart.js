// export { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS } from '../actions/types';

const INITIAL_STATE = {

};


export default function (state = {INITIAL_STATE},action){
    switch (action.type) {
        case 'FETCH_CART':
            return { ...state, productsList:{products:[],error:null,loading:true}};
        case 'FETCH_CART_SUCCESS':
            return { ...state, productsList:{products:action.payload.data,error:null,loading:false}};
        default:
            return state;
    }
}
