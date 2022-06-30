// const convert = require('./../commands/convert.js');
import convert from '../commands/convert.js';

// These are tests of the Convert command.

describe('cardinal numbers', () => {
  test('basic cardinal numbers', () => {
    const result = convert('1');
    expect(result).toEqual('one');
  });
});
