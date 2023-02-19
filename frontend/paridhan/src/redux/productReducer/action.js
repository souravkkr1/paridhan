import axios from "axios";
import * as types from './actionTypes';

let getProductsRequest = () => {
    return { type: types.GET_PRODUCTS_REQUEST }
}

let getProductsSuccess = (payload) => {
    return { type: types.GET_PRODUCTS_SUCCESS, payload };
};

let getProductsFailure = () => {
    return { type: types.GET_PRODUCTS_FAILURE };
};

const getProducts = () => (dispatch) => {
    dispatch(getProductsRequest());
    axios
        .get(`http://localhost:8080/products`)
        .then((res) => {
            console.log(res.data);
            dispatch(getProductsSuccess(res.data));
        })
        .catch((err) => {
            console.log(err);
            dispatch(getProductsFailure());
        });
};

const getProductsByCategory = (category) => (dispatch) => {
    dispatch(getProductsRequest());
    axios
        .get(`http://localhost:8080/products?category=${category}`)
        .then((res) => {
            console.log("category:", res.data);
            dispatch(getProductsSuccess(res.data));
        })
        .catch((err) => {
            console.log(err);
            dispatch(getProductsFailure());
        });
};



let addProductsRequest = () => {
    return { type: types.ADD_PRODUCTS_REQUEST }
}

let addProductsSuccess = (payload) => {
    return { type: types.ADD_PRODUCTS_SUCCESS, payload };
};

let addProductsFailure = () => {
    return { type: types.ADD_PRODUCTS_FAILURE };
};

const addProducts = () => (dispatch) => {
    dispatch(addProductsRequest());
    axios
        .get(`${process.env.API_ENDPOINT}/products`)
        .then((res) => {
            console.log(res.data);
            dispatch(addProductsSuccess(res.data));
        })
        .catch((err) => {
            console.log(err);
            dispatch(addProductsFailure());
        });
};



export { getProducts, getProductsSuccess, getProductsByCategory, addProducts };