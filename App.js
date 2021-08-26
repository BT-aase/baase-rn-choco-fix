import React from 'react';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import Game from './screens/Game';
import gameReducer from './store/reducer/game';

const rootReducer = combineReducers({
  game: gameReducer,
});
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}

