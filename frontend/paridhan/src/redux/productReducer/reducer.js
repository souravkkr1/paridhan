import * as types from './actionTypes'

const initialState = {
    isLoading: false,
    products: [],
    isError: false
}

const reducer = (productState = initialState, action) => {
    const { type, payload } = action;
    console.log("check:", type, payload)

    switch (type) {
        case types.GET_PRODUCTS_REQUEST:
            return { ...productState, isLoading: true, isError: false }
        case types.GET_PRODUCTS_SUCCESS:
            return { ...productState, isLoading: false, isError: false, products: payload };
        case types.GET_PRODUCTS_FAILURE:
            return { ...productState, isLoading: false, isError: true };
        default:
            return productState
    }

    
}

export { reducer }