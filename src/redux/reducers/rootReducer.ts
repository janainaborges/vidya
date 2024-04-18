"use client"
import { combineReducers } from "@reduxjs/toolkit";
import clienteSlice from "./clienteSlice";

const rootReducer = combineReducers({
  client: clienteSlice,
});

export default rootReducer;
