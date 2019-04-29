// Redux Thunk. Thunk allows you to write action creators that return a function instead of an action. 
// The inner function can receive the store methods dispatch and getState as parameters, but we'll just use dispatch.

export function itemsHasErrored(bool) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool // not use 'payload' here (?) means can customise word? (why do this)where will we retrieve these name as payload?
  }
}

export function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  }
}

export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  }
}


// Give a star to this redux thunk usage - learn how to do async actions using 'dispatch'
export function itemsFetchData(url) {
  return ((dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url)
     .then(res => {
       if(!res.ok) {
         throw Error(res.statusText);
       }
       dispatch(itemsIsLoading(false))
       return res.json();
     })
     .then(items => dispatch(itemsFetchDataSuccess(items)))
     .catch(() => dispatch(itemsHasErrored(true)))
  })
}

export function itemsDeleteData(deletedItem) {
  return{
    type: 'ITEMS_DELETE_DATA_SUCCESS',
    deletedItem
  }
}