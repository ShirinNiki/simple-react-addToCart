import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {
  productListReducer,
  productDetailReducer,
} from "./reducer/productReducer";

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
});
const initState = {};
const middleWare = [thunk];
const store = createStore(reducer, initState, applyMiddleware(...middleWare));

export default store;
