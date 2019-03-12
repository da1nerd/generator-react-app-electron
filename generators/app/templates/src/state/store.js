import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from './reducers';

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

/**
 * Returns a configured redux store object.
 * @return {*}
 */
export const configureStore = () => {
  const mw = [thunk, promise];
  if (IS_DEVELOPMENT) {
    mw.push(createLogger());
  }

  return createStore(
    reducer,
    undefined,
    applyMiddleware(...mw)
  );
};
