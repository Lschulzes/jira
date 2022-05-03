import { createContext } from "react";
import { Entry } from "../../interfaces";

export interface ContextProps {
  entries: Array<Entry>;
  moveEntry: (_id: string, status: Entry["status"]) => void;
}

export const EntriesContext = createContext({} as ContextProps);
