import { UIState } from "./UIProvider";

export enum UIActions {
  TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR",
  TOGGLE_IS_ADDING = "TOGGLE_IS_ADDING",
  TOGGLE_IS_DRAGGING = "TOGGLE_IS_DRAGGING",
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

    case "TOGGLE_IS_DRAGGING":
      const { isDraggingEntry } = state;
      return { ...state, isDraggingEntry: !isDraggingEntry };
      break;

    default:
      return { ...state };
      break;
  }
};
