import { createContext } from "react";
import { Entry } from "../../interfaces";

export interface ContextProps {
  entries: Array<Entry>;
}

export const EntriesContext = createContext({} as ContextProps);
