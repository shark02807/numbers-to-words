import { checkErrorInput } from '../src/commands/convert';
import { getErrorMessage } from '../src/utils/getErrorMessage.js';
import { ERROR_OUT_OF_LIMITS, ERROR_UNAVAILABLE_CHARACTER, ERROR_COMMAS_MESS } from '../src/constants/errors.js';

// These are tests of the Check Input method right before converting the number.


// range 0 - 9
describe('check input', () => {
  test('typing unsupported symbols should return error message', () => {
    const result = checkErrorInput('0y', true);
    expect(result.message).toEqual(getErrorMessage(ERROR_UNAVAILABLE_CHARACTER));
  });

  test('typing number with incorrect order of commas should return error message', () => {
    const result = checkErrorInput('22,22', true);
    expect(result.message).toEqual(getErrorMessage(ERROR_COMMAS_MESS));
  });
  
  test('typing number bigger then the limit should return error message', () => {
    const result = checkErrorInput('1,000,001', true);
    expect(result.message).toEqual(getErrorMessage(ERROR_OUT_OF_LIMITS));
  });

  test('typing number bigger then the limit WITH option should NOT return error', () => {
    const result = checkErrorInput('1,000,001', false);
    expect(result).toEqual(null);
  });
});
