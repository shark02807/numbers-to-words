// Constants
import {
  TRILLION_STRING,
  BILLION_STRING,
  MILLION_STRING,
  THOUSAND_STRING,
  LIMIT_MAX_NUMBER,
  REGEX_THREE_DIGITS_CHUNK,
  REGEX_COMMAS_ORDER,
  REGEX_SUPPORTED_SYMBOLS,
  HUNDRED_DELIMITER
} from '../constants/constants.js';
import { ZERO } from '../constants/wordsByNumbers.js';
import { ERROR_OUT_OF_LIMITS, ERROR_UNAVAILABLE_CHARACTER, ERROR_COMMAS_MESS } from '../constants/errors.js';

// Utils
import { getWordsOfNumberChunk } from '../utils/convert.js';
import { getErrorMessage } from '../utils/getErrorMessage.js';
import { logMessage, messageTypes } from '../utils/logger.js';

// Gathering the whole string by parts
export const getWordsFromNumberString = (numberAsString) => {
  // If number === 0 just return the word
  if (numberAsString === '0') {
    return ZERO;
  }

  // add commas to string to easy parsing both variants of input by single way on the next step
  const stringWithCommas = numberAsString.includes(',')
    ? numberAsString
    : numberAsString.replace(REGEX_THREE_DIGITS_CHUNK, ',');

  const numberByChunks = [];

  // Make separate chunks of initial number
  // Example: 12,345,678,901,234 =>
  // hundreds: 234; thousands: 901; millions: 678; billions: 345; trillions: 12
  const [
    hundreds,
    thousands,
    millions,
    billions,
    trillions
  ] = stringWithCommas.split(',').reverse().map(number => number ? +number : '');

  if (trillions) {
    numberByChunks.push({ value: trillions, name: TRILLION_STRING });
  }
  if (billions) {
    numberByChunks.push({ value: billions, name: BILLION_STRING });
  }
  if (millions) {
    numberByChunks.push({ value: millions, name: MILLION_STRING });
  }
  if (thousands) {
    numberByChunks.push({ value: thousands, name: THOUSAND_STRING });
  }
  if (hundreds) {
    numberByChunks.push({ value: hundreds, name: '' });
  }

  // Forming final string by chunks strings
  const resultString = numberByChunks.reduce((acc, { value, name }) => {
    // if its a long number and current chunk is hundreds (not thousands or bigger)
    const isHundredChunkOfLongNumber = !name && numberByChunks.length > 1;
    const wordsByChunk = getWordsOfNumberChunk({
      value,
      isHundredChunkOfLongNumber,
      chunkNameString: name
    });
    const isTwoDigitsNumber = value < HUNDRED_DELIMITER;
    // add comma between chunks except the case when after 1000, if the word "hundred" does not occur in the number
    const chunksInWordsSeparator = (isHundredChunkOfLongNumber && isTwoDigitsNumber) ? ' ' : ', ';
    return `${acc}${acc ? chunksInWordsSeparator : ''}${wordsByChunk}`;
  }, '');

  return resultString;
};

export const checkErrorInput = (numberAsString, limit) => {
  // check if input contains any other symbol
  if (!REGEX_SUPPORTED_SYMBOLS.test(numberAsString)) {
    return { type: messageTypes.error, message: getErrorMessage(ERROR_UNAVAILABLE_CHARACTER) };
  }

  // all symbols OK
  // check if commas are in correct order (if exists)
  if (!REGEX_COMMAS_ORDER.test(numberAsString)) {
    return { type: messageTypes.error, message: getErrorMessage(ERROR_COMMAS_MESS) };
  }

  // commas are OK
  // check if number is out of default limit
  const parsedNumber = +(numberAsString.replace(/,/g, ''));
  if (limit && parsedNumber > LIMIT_MAX_NUMBER) {
    return { type: messageTypes.warning, message: getErrorMessage(ERROR_OUT_OF_LIMITS) };
  }

  return null;
};

// Parsing input of type string (stdin) to number
export const convert = (numberAsString, limit = true) => {
  const errorInput = checkErrorInput(numberAsString, limit);

  if (errorInput) {
    logMessage(errorInput);
  } else {
    // run the process of actual converting by call getWordsFromNumberString
    logMessage({ type: messageTypes.success, message: getWordsFromNumberString(numberAsString) });
  }
};
