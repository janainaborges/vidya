import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useAppSelector } from "./useStore";
import { getSelectedProductId } from "@/redux/reducers/selectors/selectProductSlice";
import { IProduct } from "@/types/product.types";

export const useProductSelected = () => {
  const product = useAppSelector((state: RootState) => state.product.products);
  const selectedProductId = useSelector((state: RootState) =>
    getSelectedProductId(state.selectedProductId)
  );

  if (!selectedProductId) {
    return null; 
  }
  
  const clientSelected = product.find((product: IProduct) => product.id === selectedProductId);

  return clientSelected;
};


