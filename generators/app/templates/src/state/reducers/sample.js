import {SAMPLE_ACTION} from '../actions/actionTypes';

/**
 * This is a sample reducer
 * @param state
 * @param action
 * @returns {{value: *}}
 */
const sample = (state = {}, action) => {
  switch (action.type) {
    case SAMPLE_ACTION:
      return {
        value: action.value
      };
    default:
      return state;
  }
};

export default sample;

/**
 * Selects the sample value
 * @param state
 * @returns {*}
 */
export const getSample = state => state.value;
