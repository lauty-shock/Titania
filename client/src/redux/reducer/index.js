import { CREATE_PRODUCT, GET_ALL_PRODUCTS } from "../actions";

const initialState = {
    products: [],
    listener: true,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state, products: action.payload, listener: !state.listener,
            };
        case CREATE_PRODUCT:
            return {
                ...state, products: [...state.products, action.payload], listener: !state.listener,
            };
        default:
            return state;
    }
}
