import axios from "axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const CREATE_PRODUCT = "CREATE_PRODUCT";

export function getAllProducts() {
    return function (dispatch) {
        axios.get("/product").then((json) => {
            return dispatch({
                type: GET_ALL_PRODUCTS,
                payload: json.data,
            });
        })
            .catch((error) => {
                console.log(error);
            });
    };
}

export function createProduct(obj) {
    return function (dispatch) {
        axios.post("/product", obj).then((json) => {
            return dispatch({
                type: CREATE_PRODUCT,
                payload: json.data,
            });
        })
            .catch((error) => {
                console.log(error.message);
            });
    };
}
