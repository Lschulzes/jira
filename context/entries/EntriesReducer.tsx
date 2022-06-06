import { Entry } from "../../interfaces";
import { EntriesState } from "./EntriesProvider";
import { v4 as uuid } from "uuid";

export enum EntriesActions {
  MOVE_ENTRY = "MOVE_ENTRY",
  ADD_ENTRY = "ADD_ENTRY",
  REFRESH_ENTRIES = "REFRESH_ENTRIES",
}

type EntriesAction =
  | {
      type: EntriesActions.ADD_ENTRY | EntriesActions.MOVE_ENTRY;
      payload: Entry;
    }
  | {
      type: EntriesActions.REFRESH_ENTRIES;
      payload: Array<Entry>;
    };

const moveEntry = (state: EntriesState, entry: Entry): EntriesState => {
  const { entries } = state;

  const { _id, createdAt, description, status } = entry;

  const newEntries = entries.map((el) =>
    el._id === entry._id ? { _id, createdAt, description, status } : el
  );

  return { ...state, entries: newEntries };
};

const addEntry = (state: EntriesState, entry: Entry): EntriesState => {
  const { entries } = state;

  const newEntries = entries.concat([entry]);

  return { ...state, entries: newEntries };
};

const refreshEntries = (
  state: EntriesState,
  entries: Array<Entry>
): EntriesState => ({ ...state, entries });

export const EntriesReducer = (
  state: EntriesState,
  action: EntriesAction
): EntriesState => {
  switch (action.type) {
    case "MOVE_ENTRY":
      return moveEntry(state, action.payload);

    case "ADD_ENTRY":
      return addEntry(state, action.payload);

    case EntriesActions.REFRESH_ENTRIES:
      return refreshEntries(state, action.payload);

    default:
      return { ...state };
  }
};
