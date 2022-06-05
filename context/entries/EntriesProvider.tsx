import { ReactNode, useEffect, useReducer } from "react";
import { Entry } from "../../interfaces";
import { EntriesContext, EntriesReducer } from "./";
import { v4 as uuid } from "uuid";
import { EntriesActions } from "./EntriesReducer";
import { entriesAPI } from "../../apis";

export type EntriesState = {
  entries: Array<Entry>;
};

const Entries_INITIAL_STATE: EntriesState = { entries: [] };

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
      payload: {
        _id: uuid(),
        createdAt: Date.now(),
        status: "TODO",
        description,
      },
    });
  };

  const refreshEntries = async (entries: Array<Entry>) => {
    dispatch({
      type: EntriesActions.REFRESH_ENTRIES,
      payload: entries,
    });
  };

  useEffect(() => {
    entriesAPI.get("/entries").then(({ data }) => {
      refreshEntries(data.data);
    });
  }, []);

  return (
    <EntriesContext.Provider value={{ ...state, moveEntry, addEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
