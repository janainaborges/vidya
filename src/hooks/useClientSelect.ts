import { RootState } from "@/redux/store";
import { Cliente } from "@/types/cliente";
import { useSelector } from "react-redux";
import { useAppSelector } from "./useStore";
import { getSelectedClientId } from "@/redux/reducers/selectedClientIdSlice";

export const useClientSelect = () => {
  const clientes = useAppSelector((state: RootState) => state.cliente.clientes);
  const selectedClientId = useSelector((state: RootState) =>
    getSelectedClientId(state.selectedClientId)
  );

  if (!selectedClientId) {
    return null; 
  }
  
  const clientSelected = clientes.find((client: Cliente) => client.id === selectedClientId);

  return clientSelected;
};
