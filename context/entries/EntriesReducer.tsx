import { Entry } from "../../interfaces";
import { EntriesState } from "./EntriesProvider";

export enum EntriesActions {
  MOVE_ENTRY = "MOVE_ENTRY",
}

type EntriesAction = {
  type: `${EntriesActions}`;
  payload?: { _id: string; status: Entry["status"] };
};

const moveEntry = (
  state: EntriesState,
  payload: EntriesAction["payload"]
): EntriesState => {
  const { entries } = state;

  const newEntries = entries.map((el) =>
    el._id === payload?._id ? { ...el, status: payload.status } : el
  );

  return { ...state, entries: newEntries };
};

export const EntriesReducer = (
  state: EntriesState,
  action: EntriesAction
): EntriesState => {
  switch (action.type) {
    case "MOVE_ENTRY":
      return moveEntry(state, action.payload);
      break;

    default:
      return { ...state };
      break;
  }
};
