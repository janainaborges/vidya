"use client"
import { combineReducers } from "@reduxjs/toolkit";
import clientSlice from "./slice/clientSlice";
import selectedClientIdSlice from "./selectors/selectedClientSlice";
import productReducer from "./slice/productSlice";
import selectProductSlice from "./selectors/selectProductSlice";
import orderSlice from "./slice/orderSlice";

const rootReducer = combineReducers({
  client: clientSlice,
  selectedClientId: selectedClientIdSlice,
  selectedProductId: selectProductSlice,
  product: productReducer,
  order: orderSlice, 
});

export default rootReducer;
