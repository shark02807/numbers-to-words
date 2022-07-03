import { getWordsFromNumber } from '../src/commands/convert';

// These are tests of the Convert command.


// range 0 - 9
describe('cardinal numbers', () => {
  test('0', () => {
    const result = getWordsFromNumber('0');
    expect(result).toEqual('zero');
  });

  test('5', () => {
    const result = getWordsFromNumber('5');
    expect(result).toEqual('five');
  });

  test('9', () => {
    const result = getWordsFromNumber('9');
    expect(result).toEqual('nine');
  });
});

// range 10 - 12
describe('unique cardinal numbers', () => {
  test('10', () => {
    const result = getWordsFromNumber('10');
    expect(result).toEqual('ten');
  });

  test('11', () => {
    const result = getWordsFromNumber('11');
    expect(result).toEqual('eleven');
  });

  test('12', () => {
    const result = getWordsFromNumber('12');
    expect(result).toEqual('twelve');
  });
});

// range 13 - 19
describe('second decade numbers', () => {
  test('13', () => {
    const result = getWordsFromNumber('13');
    expect(result).toEqual('thirteen');
  });

  test('14', () => {
    const result = getWordsFromNumber('14');
    expect(result).toEqual('fourteen');
  });
  
  test('19', () => {
    const result = getWordsFromNumber('19');
    expect(result).toEqual('nineteen');
  });
});

// decades numbers - 20, 30, 40, ...
describe('decades numbers', () => {
  test('20', () => {
    const result = getWordsFromNumber('20');
    expect(result).toEqual('twenty');
  });

  test('40', () => {
    const result = getWordsFromNumber('40');
    expect(result).toEqual('forty');
  });
  
  test('70', () => {
    const result = getWordsFromNumber('70');
    expect(result).toEqual('seventy');
  });
});

// two-digits numbers, range 20 - 99
describe('common decade numbers', () => {
  test('35', () => {
    const result = getWordsFromNumber('35');
    expect(result).toEqual('thirty-five');
  });

  test('56', () => {
    const result = getWordsFromNumber('56');
    expect(result).toEqual('fifty-six');
  });
  
  test('78', () => {
    const result = getWordsFromNumber('78');
    expect(result).toEqual('seventy-eight');
  });

  test('91', () => {
    const result = getWordsFromNumber('91');
    expect(result).toEqual('ninety-one');
  });
});

// three-digits numbers, range 100 - 999
describe('hundreds numbers', () => {
  test('100', () => {
    const result = getWordsFromNumber('100');
    expect(result).toEqual('one hundred');
  });

  test('245', () => {
    const result = getWordsFromNumber('245');
    expect(result).toEqual('two hundred and forty-five');
  });
  
  test('768', () => {
    const result = getWordsFromNumber('768');
    expect(result).toEqual('seven hundred and sixty-eight');
  });

  test('999', () => {
    const result = getWordsFromNumber('999');
    expect(result).toEqual('nine hundred and ninety-nine');
  });
});

// thousand numbers, range 1,000 - 999,999
describe('thousand numbers', () => {
  test('1,000', () => {
    const result = getWordsFromNumber('1000');
    expect(result).toEqual('one thousand');
  });

  test('35,187', () => {
    const result = getWordsFromNumber('35187');
    expect(result).toEqual('thirty-five thousand, one hundred and eighty-seven');
  });
  
  test('298,743', () => {
    const result = getWordsFromNumber('298743');
    expect(result).toEqual('two hundred ninety-eight thousand, seven hundred and forty-three');
  });

  test('754,986', () => {
    const result = getWordsFromNumber('754986');
    expect(result).toEqual('seven hundred fifty-four thousand, nine hundred and eighty-six');
  });
});

// millions numbers, range 1,000,000 - 999,999,999
describe('millions numbers', () => {
  test('1,000,000', () => {
    const result = getWordsFromNumber('1000000');
    expect(result).toEqual('one million');
  });

  test('25,673,912', () => {
    const result = getWordsFromNumber('25673912');
    expect(result).toEqual('twenty-five million, six hundred seventy-three thousand, nine hundred and twelve');
  });
  
  test('368,241,419', () => {
    const result = getWordsFromNumber('368241419');
    expect(result).toEqual('three hundred sixty-eight million, two hundred forty-one thousand, four hundred and nineteen');
  });

  test('987,654,321', () => {
    const result = getWordsFromNumber('987654321');
    expect(result).toEqual('nine hundred eighty-seven million, six hundred fifty-four thousand, three hundred and twenty-one');
  });
});

// billions numbers, range 1,000,000,000 - 999,999,999,999
describe('billions numbers', () => {
  test('1,000,000,000', () => {
    const result = getWordsFromNumber('1000000000');
    expect(result).toEqual('one billion');
  });

  test('76,832,645,193', () => {
    const result = getWordsFromNumber('76832645193');
    expect(result).toEqual('seventy-six billion, eight hundred thirty-two million, six hundred forty-five thousand, one hundred and ninety-three');
  });
  
  test('555,666,777,888', () => {
    const result = getWordsFromNumber('555666777888');
    expect(result).toEqual('five hundred fifty-five billion, six hundred sixty-six million, seven hundred seventy-seven thousand, eight hundred and eighty-eight');
  });

  test('789,456,123,827', () => {
    const result = getWordsFromNumber('789456123827');
    expect(result).toEqual('seven hundred eighty-nine billion, four hundred fifty-six million, one hundred twenty-three thousand, eight hundred and twenty-seven');
  });
});

// trillions numbers, range 1,000,000,000 - 999,999,999,999
describe('trillions numbers', () => {
  test('1,000,000,000,000', () => {
    const result = getWordsFromNumber('1000000000000');
    expect(result).toEqual('one trillion');
  });

  test('87,767,545,323,121', () => {
    const result = getWordsFromNumber('87767545323121');
    expect(result).toEqual('eighty-seven trillion, seven hundred sixty-seven billion, five hundred forty-five million, three hundred twenty-three thousand, one hundred and twenty-one');
  });
  
  test('111,222,333,444,555', () => {
    const result = getWordsFromNumber('111222333444555');
    expect(result).toEqual('one hundred eleven trillion, two hundred twenty-two billion, three hundred thirty-three million, four hundred forty-four thousand, five hundred and fifty-five');
  });

  test('827,561,543,896,742', () => {
    const result = getWordsFromNumber('827561543896742');
    expect(result).toEqual('eight hundred twenty-seven trillion, five hundred sixty-one billion, five hundred forty-three million, eight hundred ninety-six thousand, seven hundred and forty-two');
  });
});

// numbers with gaps via zero
describe('numbers with gaps via zero', () => {
  test('001', () => {
    const result = getWordsFromNumber('001');
    expect(result).toEqual('one');
  });
  
  test('101', () => {
    const result = getWordsFromNumber('101');
    expect(result).toEqual('one hundred and one');
  });

  test('1,001', () => {
    const result = getWordsFromNumber('1001');
    expect(result).toEqual('one thousand, and one');
  });

  test('1,011', () => {
    const result = getWordsFromNumber('1011');
    expect(result).toEqual('one thousand, and eleven');
  });

  test('10,011', () => {
    const result = getWordsFromNumber('10011');
    expect(result).toEqual('ten thousand, and eleven');
  });

  test('101,011', () => {
    const result = getWordsFromNumber('101011');
    expect(result).toEqual('one hundred one thousand, and eleven');
  });

  test('1,000,011', () => {
    const result = getWordsFromNumber('1000011');
    expect(result).toEqual('one million, and eleven');
  });

  test('1,001,011', () => {
    const result = getWordsFromNumber('1001011');
    expect(result).toEqual('one million, one thousand, and eleven');
  });

  test('1,011,001', () => {
    const result = getWordsFromNumber('1011001');
    expect(result).toEqual('one million, eleven thousand, and one');
  });

  test('1,011,000', () => {
    const result = getWordsFromNumber('1011000');
    expect(result).toEqual('one million, and eleven thousand');
  });

  test('10,000,001', () => {
    const result = getWordsFromNumber('10000001');
    expect(result).toEqual('ten million, and one');
  });

  test('1,000,000,001', () => {
    const result = getWordsFromNumber('1000000001');
    expect(result).toEqual('one billion, and one');
  });

  test('1,000,000,000,001', () => {
    const result = getWordsFromNumber('1000000000001');
    expect(result).toEqual('one trillion, and one');
  });

  test('1,000,001,000,001', () => {
    const result = getWordsFromNumber('1000001000001');
    expect(result).toEqual('one trillion, one million, and one');
  });

  test('1,000,000,001,001', () => {
    const result = getWordsFromNumber('1000000001001');
    expect(result).toEqual('one trillion, one thousand, and one');
  });

  test('1,001,000,000,001', () => {
    const result = getWordsFromNumber('1001000000001');
    expect(result).toEqual('one trillion, one billion, and one');
  });

  test('1,001,000,001,001', () => {
    const result = getWordsFromNumber('1001000001001');
    expect(result).toEqual('one trillion, one billion, one thousand, and one');
  });

  test('0,000,000,001', () => {
    const result = getWordsFromNumber('0000000001');
    expect(result).toEqual('one');
  });
});
