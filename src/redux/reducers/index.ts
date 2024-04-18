"use client"
import { combineReducers } from "@reduxjs/toolkit";
import clienteReducer from "./clienteSlice";

const rootReducer = combineReducers({
    cliente: clienteReducer, 
});

export default rootReducer;
