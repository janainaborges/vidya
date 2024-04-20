"use client"
import { combineReducers } from "@reduxjs/toolkit";
import clienteReducer from "./clientSlice";
import selectedClientIdReducer from "./selectedClientIdSlice";

const rootReducer = combineReducers({
    client: clienteReducer, 
    selectedClientId: selectedClientIdReducer
});

export default rootReducer;
