"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cliente } from "../../types/cliente";
import { getState, saveState } from "@/services/localStorageService";

interface ClienteState {
  clientes: Cliente[];
}

const initialState: ClienteState = {
  clientes: [],
};

const clienteSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    setClient(state, action: PayloadAction<Cliente>) {
      state.clientes.push(action.payload);
      saveState(state); 
    },
    getClient(state) {
      const storedState = getState();
      if (storedState) {
        state.clientes = storedState.clientes;
      }
    },
  },
});

export default clienteSlice.reducer;

export const { setClient, getClient } = clienteSlice.actions;
