"use client"
import { combineReducers } from "@reduxjs/toolkit";
import clienteReducer from "./clienteSlice";
import selectedClientIdReducer from "./selectedClientIdSlice";

const rootReducer = combineReducers({
    cliente: clienteReducer, 
    selectedClientId: selectedClientIdReducer
});

export default rootReducer;
