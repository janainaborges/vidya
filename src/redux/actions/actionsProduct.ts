import { ADD_PRODUCT, DELETE_PRODUCT } from "@/types/action.types";
import { IProduct } from "@/types/product.types";

export const addProduct = (product: IProduct) => ({
  type: ADD_PRODUCT as typeof ADD_PRODUCT,
  payload: product,
});

export const deleteProduct = (productId: string) => ({
  type: DELETE_PRODUCT as typeof DELETE_PRODUCT,
  payload: productId,
});
