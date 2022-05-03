import { UIState } from "./UIProvider";

export enum UIActions {
  TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR",
  TOGGLE_IS_ADDING = "TOGGLE_IS_ADDING",
}

type UIAction = { type: `${UIActions}`; payload?: any };

export const UIReducer = (state: UIState, action: UIAction): UIState => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      const { sideMenuOpen } = state;
      return { ...state, sideMenuOpen: !sideMenuOpen };
      break;

    case "TOGGLE_IS_ADDING":
      const { isAddingEntry } = state;
      return { ...state, isAddingEntry: !isAddingEntry };
      break;

    default:
      return { ...state };
      break;
  }
};
