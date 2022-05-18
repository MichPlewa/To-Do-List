export const selectInputValue = (state) => state.search;

const createActionName = (actionName) => `app/search/${actionName}`;
const UPDATE_SEARCH = createActionName('UPDATE_SEARCH');

export const upDateSearch = (payload) => ({ type: UPDATE_SEARCH, payload });

const searchStringReducer = (statePart = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return action.payload;
    default:
      return statePart;
  }
};

export default searchStringReducer;
