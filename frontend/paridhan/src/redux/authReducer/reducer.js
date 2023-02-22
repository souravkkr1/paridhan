// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from "./actionTypes";

const initialState = {
  isAuth: localStorage.getItem("token") ? true : false,
  token: "",
  isLoading: false,
  isError: false,
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case types.LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      localStorage.setItem("user", JSON.stringify(payload.user));
      console.log("pp:", payload)
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload.token,
        user: payload.user,
      };
    case types.LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case types.LOGOUT_REQUEST:
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      return { ...initialState, isAuth: false, users: {}, token: "" };
    default:
      return state;
  }
};

export { reducer };
