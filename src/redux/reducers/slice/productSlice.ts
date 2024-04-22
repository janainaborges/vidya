import { getState, saveState } from "@/services/localStorageService";
import { ADD_PRODUCT, DELETE_PRODUCT } from "@/types/action.types";
import { IProduct } from "@/types/product.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface State {
  products: IProduct[];
}

interface Action {
  type: string;
  payload: any;
}

const initialState: State = {
  products: [],
};

const productReducer =createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct(state, action: PayloadAction<IProduct>) {
      const newCliente: IProduct = {
        ...action.payload,
        id: generateUniqueId()
      };
      state.products.push(newCliente);
      saveState(state, "vidya_product"); 
    },
    getProduct(state) {
      const storedState = getState("vidya_product");
      if (storedState) {
        state.products = storedState.products;
      }
    },
  },
});

function generateUniqueId(): string {
  return Math.random().toString(36).substr(2, 9); 
}

export default productReducer.reducer;

export const { setProduct, getProduct } = productReducer.actions;
