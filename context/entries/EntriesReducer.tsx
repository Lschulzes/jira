import { EntriesState } from "./EntriesProvider";

export enum EntriesActions {
  TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR",
}

type EntriesAction = { type: `${EntriesActions}`; payload?: any };

export const EntriesReducer = (
  state: EntriesState,
  action: EntriesAction
): EntriesState => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      const { entries } = state;
      return { ...state };
      break;

    default:
      return { ...state };
      break;
  }
};
