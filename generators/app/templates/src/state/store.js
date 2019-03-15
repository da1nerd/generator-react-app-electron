import { applyMiddleware, compose, createStore } from "redux";
import promise from "redux-promise";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./reducers";

const IS_DEVELOPMENT = process.env.NODE_ENV === "development";

/**
 * Returns a configured redux store object.
 * @return {*}
 */
export const configureStore = () => {
  const mw = [thunk, promise];
  if (IS_DEVELOPMENT) {
    mw.push(createLogger());
  }

  // connect to redux dev tools if available
  let composeEnhancers = compose;
  if (IS_DEVELOPMENT && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    // Set `trace` to true to get access more features in the redux dev tool.
    // Note: this could have a performance impact
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
      {trace: true, traceLimit: 25});
  }

  return createStore(
    reducer,
    undefined, // replace `undefined` with your previous state
    composeEnhancers(applyMiddleware(...mw))
  );
};
