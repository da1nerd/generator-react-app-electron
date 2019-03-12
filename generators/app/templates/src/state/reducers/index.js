import {combineReducers} from 'redux';
import sample, * as fromSample from './sample';

/**
 * Constructs the root reducer
 */
export default combineReducers({
  sample
});

/**
 * Retrieves the sample value
 * @param state
 * @returns {*}
 */
export const getSample = state => fromSample.getSample(state.sample);
