import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedClientIdState {
  selectedClientId: string | null;
}

const initialState: SelectedClientIdState = {
  selectedClientId: null,
};

const selectedClientIdSlice = createSlice({
  name: "selectedClientId",
  initialState,
  reducers: {
    setSelectedClientId(state, action: PayloadAction<string>) {
      state.selectedClientId = action.payload;
    },
  },
});

export const { setSelectedClientId } = selectedClientIdSlice.actions;

export const getSelectedClientId = (state: SelectedClientIdState) => state.selectedClientId;

export default selectedClientIdSlice.reducer;
