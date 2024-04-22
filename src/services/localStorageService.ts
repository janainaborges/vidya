import { getClient } from "@/redux/reducers/slice/clientSlice";
import { AppThunk } from "@/redux/store";

// const localStorageKey = "vidya";

export const getState = (localStorageKey: string) => {
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

export const saveState = (state: any, localStorageKey: string) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(localStorageKey, serializedState);
  } catch {
    // ignore write errors
  }
};

export const fetchClientState = (localStorageKey: string): AppThunk => async (dispatch: (arg0: any) => void) => {
  const storedState = getState(localStorageKey);
  if (storedState) {
    dispatch(getClient(storedState));
  }
};