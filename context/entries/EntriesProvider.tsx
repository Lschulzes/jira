import { ReactNode, useReducer } from "react";
import { Entry } from "../../interfaces";
import { EntriesContext, EntriesReducer } from "./";
import { v4 as uuid } from "uuid";

export type EntriesState = {
  entries: Array<Entry>;
};

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuid(),
      createdAt: Date.now(),
      description: "Lorem Ipsum Dolores di mec le trab is en el fon",
      status: "TODO",
    },
    {
      _id: uuid(),
      createdAt: Date.now() - 3000,
      description: "Lorem Ipsum Dolores di mec le trab is en el fon",
      status: "IN_PROGRESS",
    },
    {
      _id: uuid(),
      createdAt: Date.now() - 6000,
      description: "Lorem Ipsum Dolores di mec le trab is en el fon",
      status: "IN_TEST",
    },
    {
      _id: uuid(),
      createdAt: Date.now() - 10000,
      description: "Lorem Ipsum Dolores di mec le trab is en el fon",
      status: "COMPLETED",
    },
  ],
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
