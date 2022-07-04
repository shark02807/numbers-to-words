import { getWordsFromNumberString } from '../src/commands/convert';

// These are tests of the Convert command.

// range 0 - 9
describe('cardinal numbers', () => {
  test('0', () => {
    const result = getWordsFromNumberString('0');
    expect(result).toEqual('zero');
  });

  test('5', () => {
    const result = getWordsFromNumberString('5');
    expect(result).toEqual('five');
  });

  test('9', () => {
    const result = getWordsFromNumberString('9');
    expect(result).toEqual('nine');
  });
});

// range 10 - 12
describe('unique cardinal numbers', () => {
  test('10', () => {
    const result = getWordsFromNumberString('10');
    expect(result).toEqual('ten');
  });

  test('11', () => {
    const result = getWordsFromNumberString('11');
    expect(result).toEqual('eleven');
  });

  test('12', () => {
    const result = getWordsFromNumberString('12');
    expect(result).toEqual('twelve');
  });
});

// range 13 - 19
describe('second decade numbers', () => {
  test('13', () => {
    const result = getWordsFromNumberString('13');
    expect(result).toEqual('thirteen');
  });

  test('14', () => {
    const result = getWordsFromNumberString('14');
    expect(result).toEqual('fourteen');
  });

  test('19', () => {
    const result = getWordsFromNumberString('19');
    expect(result).toEqual('nineteen');
  });
});

// decades numbers - 20, 30, 40, ...
describe('decades numbers', () => {
  test('20', () => {
    const result = getWordsFromNumberString('20');
    expect(result).toEqual('twenty');
  });

  test('40', () => {
    const result = getWordsFromNumberString('40');
    expect(result).toEqual('forty');
  });

  test('70', () => {
    const result = getWordsFromNumberString('70');
    expect(result).toEqual('seventy');
  });
});

// two-digits numbers, range 20 - 99
describe('common decade numbers', () => {
  test('35', () => {
    const result = getWordsFromNumberString('35');
    expect(result).toEqual('thirty-five');
  });

  test('56', () => {
    const result = getWordsFromNumberString('56');
    expect(result).toEqual('fifty-six');
  });

  test('78', () => {
    const result = getWordsFromNumberString('78');
    expect(result).toEqual('seventy-eight');
  });

  test('91', () => {
    const result = getWordsFromNumberString('91');
    expect(result).toEqual('ninety-one');
  });
});

// three-digits numbers, range 100 - 999
describe('hundreds numbers', () => {
  test('100', () => {
    const result = getWordsFromNumberString('100');
    expect(result).toEqual('one hundred');
  });

  test('245', () => {
    const result = getWordsFromNumberString('245');
    expect(result).toEqual('two hundred and forty-five');
  });

  test('768', () => {
    const result = getWordsFromNumberString('768');
    expect(result).toEqual('seven hundred and sixty-eight');
  });

  test('999', () => {
    const result = getWordsFromNumberString('999');
    expect(result).toEqual('nine hundred and ninety-nine');
  });
});

// thousand numbers, range 1,000 - 999,999
describe('thousand numbers', () => {
  test('1,000', () => {
    const result = getWordsFromNumberString('1000');
    expect(result).toEqual('one thousand');
  });

  test('35,187', () => {
    const result = getWordsFromNumberString('35187');
    expect(result).toEqual('thirty-five thousand, one hundred and eighty-seven');
  });

  test('298,743', () => {
    const result = getWordsFromNumberString('298743');
    expect(result).toEqual('two hundred and ninety-eight thousand, seven hundred and forty-three');
  });

  test('754,986', () => {
    const result = getWordsFromNumberString('754986');
    expect(result).toEqual('seven hundred and fifty-four thousand, nine hundred and eighty-six');
  });
});

// millions numbers, range 1,000,000 - 999,999,999
describe('millions numbers', () => {
  test('1,000,000', () => {
    const result = getWordsFromNumberString('1000000');
    expect(result).toEqual('one million');
  });

  test('25,673,912', () => {
    const result = getWordsFromNumberString('25673912');
    expect(result).toEqual('twenty-five million, six hundred and seventy-three thousand, nine hundred and twelve');
  });

  test('368,241,419', () => {
    const result = getWordsFromNumberString('368241419');
    expect(result).toEqual('three hundred and sixty-eight million, two hundred and forty-one thousand, four hundred and nineteen');
  });

  test('987,654,321', () => {
    const result = getWordsFromNumberString('987654321');
    expect(result).toEqual('nine hundred and eighty-seven million, six hundred and fifty-four thousand, three hundred and twenty-one');
  });
});

// billions numbers, range 1,000,000,000 - 999,999,999,999
describe('billions numbers', () => {
  test('1,000,000,000', () => {
    const result = getWordsFromNumberString('1000000000');
    expect(result).toEqual('one billion');
  });

  test('76,832,645,193', () => {
    const result = getWordsFromNumberString('76832645193');
    expect(result).toEqual('seventy-six billion, eight hundred and thirty-two million, six hundred and forty-five thousand, one hundred and ninety-three');
  });

  test('555,666,777,888', () => {
    const result = getWordsFromNumberString('555666777888');
    expect(result).toEqual('five hundred and fifty-five billion, six hundred and sixty-six million, seven hundred and seventy-seven thousand, eight hundred and eighty-eight');
  });

  test('789,456,123,827', () => {
    const result = getWordsFromNumberString('789456123827');
    expect(result).toEqual('seven hundred and eighty-nine billion, four hundred and fifty-six million, one hundred and twenty-three thousand, eight hundred and twenty-seven');
  });
});

// trillions numbers, range 1,000,000,000 - 999,999,999,999
describe('trillions numbers', () => {
  test('1,000,000,000,000', () => {
    const result = getWordsFromNumberString('1000000000000');
    expect(result).toEqual('one trillion');
  });

  test('87,767,545,323,121', () => {
    const result = getWordsFromNumberString('87767545323121');
    expect(result).toEqual('eighty-seven trillion, seven hundred and sixty-seven billion, five hundred and forty-five million, three hundred and twenty-three thousand, one hundred and twenty-one');
  });

  test('111,222,333,444,555', () => {
    const result = getWordsFromNumberString('111222333444555');
    expect(result).toEqual('one hundred and eleven trillion, two hundred and twenty-two billion, three hundred and thirty-three million, four hundred and forty-four thousand, five hundred and fifty-five');
  });

  test('827,561,543,896,742', () => {
    const result = getWordsFromNumberString('827561543896742');
    expect(result).toEqual('eight hundred and twenty-seven trillion, five hundred and sixty-one billion, five hundred and forty-three million, eight hundred and ninety-six thousand, seven hundred and forty-two');
  });
});

// numbers with gaps via zero
describe('numbers with gaps via zero', () => {
  test('001', () => {
    const result = getWordsFromNumberString('001');
    expect(result).toEqual('one');
  });

  test('101', () => {
    const result = getWordsFromNumberString('101');
    expect(result).toEqual('one hundred and one');
  });

  test('1,001', () => {
    const result = getWordsFromNumberString('1001');
    expect(result).toEqual('one thousand and one');
  });

  test('1,011', () => {
    const result = getWordsFromNumberString('1011');
    expect(result).toEqual('one thousand and eleven');
  });

  test('10,011', () => {
    const result = getWordsFromNumberString('10011');
    expect(result).toEqual('ten thousand and eleven');
  });

  test('101,011', () => {
    const result = getWordsFromNumberString('101011');
    expect(result).toEqual('one hundred and one thousand and eleven');
  });

  test('1,000,011', () => {
    const result = getWordsFromNumberString('1000011');
    expect(result).toEqual('one million and eleven');
  });

  test('1,001,011', () => {
    const result = getWordsFromNumberString('1001011');
    expect(result).toEqual('one million, one thousand and eleven');
  });

  test('1,011,001', () => {
    const result = getWordsFromNumberString('1011001');
    expect(result).toEqual('one million, eleven thousand and one');
  });

  test('1,011,000', () => {
    const result = getWordsFromNumberString('1011000');
    expect(result).toEqual('one million, eleven thousand');
  });

  test('10,000,001', () => {
    const result = getWordsFromNumberString('10000001');
    expect(result).toEqual('ten million and one');
  });

  test('1,000,000,001', () => {
    const result = getWordsFromNumberString('1000000001');
    expect(result).toEqual('one billion and one');
  });

  test('1,000,000,000,001', () => {
    const result = getWordsFromNumberString('1000000000001');
    expect(result).toEqual('one trillion and one');
  });

  test('1,000,001,000,001', () => {
    const result = getWordsFromNumberString('1000001000001');
    expect(result).toEqual('one trillion, one million and one');
  });

  test('1,000,000,001,001', () => {
    const result = getWordsFromNumberString('1000000001001');
    expect(result).toEqual('one trillion, one thousand and one');
  });

  test('1,001,000,000,001', () => {
    const result = getWordsFromNumberString('1001000000001');
    expect(result).toEqual('one trillion, one billion and one');
  });

  test('1,001,000,001,001', () => {
    const result = getWordsFromNumberString('1001000001001');
    expect(result).toEqual('one trillion, one billion, one thousand and one');
  });

  test('0,000,000,001', () => {
    const result = getWordsFromNumberString('0000000001');
    expect(result).toEqual('one');
  });
});
