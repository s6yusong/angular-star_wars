import * as fromViewType from "../actions/viewType.action";

export interface ViewTypeState {
  tableView: boolean;
};

export const initState = {
  tableView: true,
};

export function reducer(
  state = initState,
  action: fromViewType.ViewTypeAction
) {
  switch ((action.type)) {
    case fromViewType.TOGGLE_VIEW: {
      const toggleView = action.payload;
      return {
        ...state,
        tableView: toggleView
      }
    }
  }
  return state;
}
export const getViewType = (state: ViewTypeState) => state.tableView;
