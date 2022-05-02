import { UIState } from "./UIProvider";

export enum UIActions {
  TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR",
}

type UIAction = { type: `${UIActions}`; payload?: any };

export const UIReducer = (state: UIState, action: UIAction): UIState => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      const { sideMenuOpen } = state;
      return { ...state, sideMenuOpen: !sideMenuOpen };
      break;

    default:
      return { ...state };
      break;
  }
};
