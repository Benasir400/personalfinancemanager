import { createStore } from 'redux';

const initialState = {
  transactions: [],
  notifications: [],
  budget: {}
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TRANSACTIONS':
      return { ...state, transactions: action.payload };
    case 'SET_NOTIFICATIONS':
      return { ...state, notifications: action.payload };
    case 'SET_BUDGET':
      return { ...state, budget: action.payload };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;
