import React from 'react';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import gameReducer from './store/reducer/game';

import GameNavigator  from './navigation/GameNavigator';

const rootReducer = combineReducers({
  game: gameReducer,
});
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <GameNavigator />
    </Provider>
  );
}

