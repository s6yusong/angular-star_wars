import * as fromViewState from "../actions/viewType.action";

export interface ViewState {
  tableView: boolean;
  searchKeyWord: string
};

export const initState = {
  tableView: true,
  searchKeyWord: '',
};

export function reducer(
  state = initState,
  action: fromViewState.ViewAction
) {
  switch ((action.type)) {
    case fromViewState.TOGGLE_VIEW: {
      const toggleView = action.payload;
      return {
        ...state,
        tableView: toggleView
      }
    }
    case fromViewState.CHANGE_SEARCH_KEY: {
      const searchKey = action.payload;
      return {
        ...state,
        searchKeyWord: searchKey
      }
    }
  }
  return state;
}
export const getViewType = (state: ViewState) => state.tableView;
export const getSearchKey = (state: ViewState) => state.searchKeyWord;
