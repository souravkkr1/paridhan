import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux"
import thunk from 'redux-thunk';
import { reducer as AuthReducer } from './authReducer/reducer';
// import { reducer as CartReducer } from './cartReducer/reducer'
import { reducer as ProductReducer } from './productReducer/reducer'

const rootReducer = combineReducers({
    AuthReducer,
    ProductReducer
})

const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = legacy_createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
export default store;