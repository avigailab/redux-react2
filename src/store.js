import { createStore } from 'redux';
import jsonData from '../data/data';
import conf from '../data/config';

const reducer = (state) => {
  return state;
};

const initialState = {
  jsonData,
  conf
};

window.store = createStore(reducer, initialState);

export default window.store;