"use client"
import { combineReducers } from "@reduxjs/toolkit";
import clienteSlice from "./clienteSlice";
import selectedClientIdSlice from "./selectedClientIdSlice";

const rootReducer = combineReducers({
  client: clienteSlice,
  selectedClientId: selectedClientIdSlice,
});

export default rootReducer;
