import {
  ITEMS_HAS_ERRORED,
  ITEMS_IS_LOADING,
  ITEMS_FETCH_DATA_SUCCESS,
  ITEMS_DELETE_DATA_SUCCESS
} from "./type";

export function itemsHasErrored(state = false, action) {
  switch (action.type) {
    case ITEMS_HAS_ERRORED:
      return action.hasErrored;

    default:
      return state;
  }
}

export function itemsIsLoading(state = false, action) {
  switch (action.type) {
    case ITEMS_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

export function items(state = [], action) {
  switch (action.type) {
    case ITEMS_FETCH_DATA_SUCCESS:
      return action.items;

    case ITEMS_DELETE_DATA_SUCCESS:
      return [
        ...state.slice(0, action.deletedItem),
        ...state.slice(action.deletedItem + 1)
      ];
    //state.splice(action.deletedItem,1)

    default:
      return state;
  }
}
