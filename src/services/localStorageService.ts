import { getClient } from "@/redux/reducers/clienteSlice";
import { AppThunk } from "@/redux/store";

const localStorageKey = "vidya";

export const getState = () => {
  try {
    const serializedState = localStorage.getItem(localStorageKey);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(localStorageKey, serializedState);
  } catch {
    // ignore write errors
  }
};

export const fetchClientState = (): AppThunk => async (dispatch: (arg0: any) => void) => {
  const storedState = getState();
  if (storedState) {
    dispatch(getClient(storedState));
  }
};