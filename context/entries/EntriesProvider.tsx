import { ReactNode, useReducer } from "react";
import { EntriesContext, EntriesReducer } from "./";

export type EntriesState = {
  entries: [];
};

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(
    EntriesReducer,
    Entries_INITIAL_STATE,
    undefined
  );

  return (
    <EntriesContext.Provider value={{ ...state }}>
      {children}
    </EntriesContext.Provider>
  );
};
