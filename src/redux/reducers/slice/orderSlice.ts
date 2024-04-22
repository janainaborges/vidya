import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { IProduct } from "@/types/product.types";
import { IClient } from "@/types/client.types";
import { getState, saveState } from "@/services/localStorageService";

interface Order {
  id: string;
  client: IClient;
  products: IProduct[];
  orderDate: Date;
}

interface OrderState {
  orders: Order[];
}

const initialState: OrderState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder(state, action: PayloadAction<Order>) {
      state.orders.push(action.payload);
      saveState(state, "vidya_orders");
    },
    getOrders(state) {
      const storedState = getState("vidya_orders");
      if (storedState) {
        state.orders = storedState.orders;
      }
    },
  },
});

export const { addOrder, getOrders } = orderSlice.actions;

export const selectAllOrders = (state: RootState) => state.order.orders;

export default orderSlice.reducer;
