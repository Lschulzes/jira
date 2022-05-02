import { createContext } from "react";

export interface ContextProps {
  entries: Array<string>;
}

export const EntriesContext = createContext({} as ContextProps);
