import React from 'react';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './reducer';

export const Store = React.createContext(composeWithDevTools());

const initialState = {
  cats: [],
  ranking: [],
};

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = {state, dispatch};
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
