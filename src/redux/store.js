import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import CreateSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './reducers/index';
import rootSaga from './saga/root-saga';

const initialState = {};

// Saga middleware
const sagaMiddleware = CreateSagaMiddleware();

// create middleware - use logger middleware only in development
const middleware = [sagaMiddleware];

if (process.ENV === 'development') {
  middleware.push(logger);
}

// Create store
export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// run rootSaga to listen to all sagas
sagaMiddleware.run(rootSaga);

// persist state with redux-persist
export const persistor = persistStore(store);
