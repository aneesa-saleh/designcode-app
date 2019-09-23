import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import HomeScreen from './screens/HomeScreen';

const initialState = {
  menu: 'closed'
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MENU':
      return { ...state, menu: 'open' };
    case 'CLOSE_MENU':
      return { ...state, menu: 'closed' };
    default:
      return state;
  }
};
const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
);

export default App;
