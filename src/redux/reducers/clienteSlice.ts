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
      const newCliente: Cliente = {
        ...action.payload,
        id: generateUniqueId()
      };
      state.clientes.push(newCliente);
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

function generateUniqueId(): string {
  return Math.random().toString(36).substr(2, 9); 
}

export default clienteSlice.reducer;

export const { setClient, getClient } = clienteSlice.actions;
