import { createStore } from 'redux';
import shortid from 'shortid';
import initialState from './initalialState';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        state,
        columns: [...state.columns, { ...action.newColumn, id: shortid() }],
      };
    default:
      console.log('Wrong action.type!');
  }
  return state;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
