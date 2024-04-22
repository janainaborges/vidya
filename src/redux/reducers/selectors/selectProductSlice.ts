
import { RootState } from '@/redux/store'; 
import { IProduct } from '@/types/product.types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const selectAllProducts = (state: RootState): IProduct[] => state.product.products;

export const selectProductById = (state: RootState, productId: string): IProduct | undefined =>
  state.product.products.find((product: { id: string; }) => product.id === productId);



interface selectedProductState {
  selectedProductId: string | null;
}

const initialState: selectedProductState = {
  selectedProductId: null,
};

const selectedSelectedSlice = createSlice({
  name: "selectedProductId",
  initialState,
  reducers: {
    setSelectedProductId(state, action: PayloadAction<string>) {
      state.selectedProductId = action.payload;
    },
  },
});

export const { setSelectedProductId } = selectedSelectedSlice.actions;

export const getSelectedProductId = (state: selectedProductState) => state.selectedProductId;

export default selectedSelectedSlice.reducer;
