// Base
import chalk from 'chalk';

// Constants
import {
    MILLION_DELIMITER,
    THOUSAND_DELIMITER,
    MILLION_STRING,
    THOUSAND_STRING,
    MAX_NUMBER_LIMIT
} from '../src/constants/constants.js';
import { ZERO } from '../src/constants/wordsByNumbers.js';
import { ERROR_OUT_OF_LIMITS, ERROR_UNAVAILABLE_CHARACTER, ERROR_COMMAS_MESS } from '../src/constants/errors.js';

// Utils
import { getWordsOfHundred, getWordsStringByBigNumbers } from '../src/utils/convert.js';
import { getErrorMessage } from '../src/utils/getErrorMessage.js';

// Gathering the whole string by parts
const getWordsFromNumber = (number) => {
    
    // If number === 0 just return the word
    if (!number) {
        return ZERO;
    }

    let wordsString = '';

    // Forming string for million part
    const millionInteger = Math.floor(number / MILLION_DELIMITER);
    const millionRemain = number % MILLION_DELIMITER;
    if (millionInteger) {
        const { hundred, tens } = getWordsOfHundred(millionInteger);
        wordsString += getWordsStringByBigNumbers(hundred, tens, MILLION_STRING, millionRemain);
    }

    // Forming string for thousand part
    const thousandInteger = Math.floor(millionRemain / THOUSAND_DELIMITER);
    const hundredInteger = number % THOUSAND_DELIMITER;
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

// Parsing input of type string (stdin) to number
export default (numberAsString) => {
    // mask of numbers with commas: 6,807; 143,562; 12,008 etc.
    const numberWithCommasRegex = /^(?:\d{1,3}(?:,\d{3})*|\d+)$/;
    
    // mask of only digits input: 6807; 143562; 12008 etc.
    const onlyNumberRegex = /^[,0-9]+$/;
    
    if (!onlyNumberRegex.test(numberAsString)) {
        // printing error in red since unavailable character was used
        console.error(chalk.red.bold(getErrorMessage(ERROR_UNAVAILABLE_CHARACTER)));
    } else if (!numberWithCommasRegex.test(numberAsString)) {
        // printing error in red since commas were used in incorrect way
        console.error(chalk.red.bold(getErrorMessage(ERROR_COMMAS_MESS)));
    } else {
        const parsedNumber = +(numberAsString.replace(/,/g, ''));
        // check number limits
        if (parsedNumber > MAX_NUMBER_LIMIT) {
            // printing error in yellow since correct number was typed but over the limits
            console.error(chalk.yellow.bold(getErrorMessage(ERROR_OUT_OF_LIMITS)));
        } else {
            // run the process of actual converting by call getWordsFromNumber
            // printing error in green as 
            console.log(chalk.green.bold(getWordsFromNumber(parsedNumber)));
        }
    }
}
