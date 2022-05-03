import { Entry } from "../../interfaces";
import { EntriesState } from "./EntriesProvider";
import { v4 as uuid } from "uuid";

export enum EntriesActions {
  MOVE_ENTRY = "MOVE_ENTRY",
  ADD_ENTRY = "ADD_ENTRY",
}

type EntriesAction = {
  type: `${EntriesActions}`;
  payload: { _id: string; status: Entry["status"]; description: string };
};

const moveEntry = (
  state: EntriesState,
  { _id, status }: { _id: string; status: Entry["status"] }
): EntriesState => {
  const { entries } = state;

  const newEntries = entries.map((el) =>
    el._id === _id ? { ...el, status } : el
  );

  return { ...state, entries: newEntries };
};

const addEntry = (
  state: EntriesState,
  { description }: { description: string }
): EntriesState => {
  const { entries } = state;

  const newEntries = entries.concat([
    {
      _id: uuid(),
      createdAt: Date.now(),
      status: "TODO",
      description,
    },
  ]);

  return { ...state, entries: newEntries };
};

export const EntriesReducer = (
  state: EntriesState,
  action: EntriesAction
): EntriesState => {
  switch (action.type) {
    case "MOVE_ENTRY":
      return moveEntry(state, {
        _id: action.payload?._id,
        status: action.payload?.status,
      });
      break;

    case "ADD_ENTRY":
      return addEntry(state, { description: action.payload?.description });
      break;

    default:
      return { ...state };
      break;
  }
};
