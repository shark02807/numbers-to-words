import {
    MILLION_DELIMITER,
    THOUSAND_DELIMITER,
    MILLION_STRING,
    THOUSAND_STRING,
    ERROR_MESSAGE
} from '../src/constants/constants.js';
import { getWordsOfHundred, getWordsStringByBigNumbers } from '../src/utils.js';

// Gathering the whole string by parts
const getWordsFromNumber = (number) => {
    let wordsString = '';

    const millionInteger = Math.floor(number / MILLION_DELIMITER);
    const millionRemain = number % MILLION_DELIMITER;

    const thousandInteger = Math.floor(millionRemain / THOUSAND_DELIMITER);
    const hundredInteger = number % THOUSAND_DELIMITER;

    // Forming string for million part
    if (millionInteger) {
        const { hundred, tens } = getWordsOfHundred(millionInteger);
        wordsString += getWordsStringByBigNumbers(hundred, tens, MILLION_STRING, millionRemain);
    }
    // Forming string for thousand part
    if (thousandInteger) {
        const { hundred, tens } = getWordsOfHundred(thousandInteger);
        wordsString += getWordsStringByBigNumbers(hundred, tens, THOUSAND_STRING, hundredInteger);
    }
    // Forming string for hundred part
    if (hundredInteger) {
        const { hundred, tens } = getWordsOfHundred(hundredInteger);
        wordsString += `${hundred}${(hundred && tens) ? ' ' : ''}${(wordsString || hundred) && tens ? 'and ' : ''}${tens}`;
    }
  
    return wordsString;
}

// Parsing input
export default (numberAsString) => {
    // mask of numbers with commas: 6,807; 143,562; 12,008 etc.
    const numberWithCommasRegex = /^(?:\d{1,3}(?:,\d{3})*|\d+)$/;
    
    // mask of only digits input: 6807; 143562; 12008 etc.
    const onlyNumberRegex = /^[0-9]+$/;
    
    const isValidNumber = numberWithCommasRegex.test(numberAsString) || onlyNumberRegex.test(numberAsString);
    if (!isValidNumber) {
        console.error(ERROR_MESSAGE);
    } else {
        const parsedNumber = +(numberAsString.replace(/,/g, ''));
        // check non-zero number
        if (!parsedNumber) {
            console.error(ERROR_MESSAGE);
        } else {
            console.log(getWordsFromNumber(parsedNumber));
        }
    }
}
