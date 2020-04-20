import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage'; //this import indicates to use localStorage rather than sessionStorage

import user from './user';
import cart from './cart';
import directory from './directory';
import shop from './shop';

// persist config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user,
  cart,
  shop,
  directory,
});

export default persistReducer(persistConfig, rootReducer);
