import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IClient } from "../../../types/client.types";
import { getState, saveState } from "@/services/localStorageService";

interface ClienteState {
  clients: IClient[];
}

const initialState: ClienteState = {
  clients: [],
};

const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    setClient(state, action: PayloadAction<IClient>) {
      const newCliente: IClient = {
        ...action.payload,
        id: generateUniqueId()
      };
      state.clients.push(newCliente);
      saveState(state, "vidya_client"); 
    },
    getClient(state) {
      const storedState = getState("vidya_client");
      if (storedState) {
        state.clients = storedState.clientes;
      }
    },
  },
});

function generateUniqueId(): string {
  return Math.random().toString(36).substr(2, 9); 
}

export default clientSlice.reducer;

export const { setClient, getClient } = clientSlice.actions;
