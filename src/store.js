import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducer/cartReducer";
import {
  productListReducer,
  productDetailReducer,
} from "./reducer/productReducer";

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
});
const cartIemFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const initState = {
  cart: { cartItems: cartIemFromLocalStorage },
};
const middleWare = [thunk];
const store = createStore(reducer, initState, applyMiddleware(...middleWare));

export default store;
