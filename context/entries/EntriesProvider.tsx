import { ReactNode, useReducer } from "react";
import { Entry } from "../../interfaces";
import { EntriesContext, EntriesReducer } from "./";
import { v4 as uuid } from "uuid";
import { EntriesActions } from "./EntriesReducer";

export type EntriesState = {
  entries: Array<Entry>;
};

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuid(),
      createdAt: Date.now(),
      description: "TODO Lorem Ipsum Dolores di mec le trab is en el fon",
      status: "TODO",
    },
    {
      _id: uuid(),
      createdAt: Date.now() - 300000,
      description: "PROGRESS Lorem Ipsum Dolores di mec le trab is en el fon",
      status: "IN_PROGRESS",
    },
    {
      _id: uuid(),
      createdAt: Date.now() - 600000,
      description: "TEST Lorem Ipsum Dolores di mec le trab is en el fon",
      status: "IN_TEST",
    },
    {
      _id: uuid(),
      createdAt: Date.now() - 1000000,
      description: "COMPLETED Lorem Ipsum Dolores di mec le trab is en el fon",
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

  const moveEntry = (_id: string, status: Entry["status"]) => {
    dispatch({ type: EntriesActions.MOVE_ENTRY, payload: { _id, status } });
  };

  const addEntry = (description: string) => {
    dispatch({
      type: EntriesActions.ADD_ENTRY,
      payload: { description },
    });
  };

  return (
    <EntriesContext.Provider value={{ ...state, moveEntry, addEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
