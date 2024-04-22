import { RootState } from "@/redux/store";
import { IClient } from "@/types/client.types";
import { useSelector } from "react-redux";
import { useAppSelector } from "./useStore";
import { getSelectedClientId } from "@/redux/reducers/selectors/selectedClientSlice";

export const useClientSelect = () => {
  const clients = useAppSelector((state: RootState) => state.client.clients);
  const selectedClientId = useSelector((state: RootState) =>
    getSelectedClientId(state.selectedClientId)
  );

  if (!selectedClientId) {
    return null; 
  }
  
  const clientSelected = clients.find((client: IClient) => client.id === selectedClientId);

  return clientSelected;
};
