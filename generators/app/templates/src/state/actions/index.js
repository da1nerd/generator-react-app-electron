import {SAMPLE_ACTION} from './actionTypes';

/**
 * Sets the sample value
 * @param value
 * @returns {{type: string, value: *}}
 */
export const setSample = value => ({
  type: SAMPLE_ACTION,
  value
});
