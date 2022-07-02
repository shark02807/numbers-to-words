// Base
import chalk from 'chalk';

// Constants
import {
    TRILLION_STRING,
    BILLION_STRING,
    MILLION_STRING,
    THOUSAND_STRING,
    MAX_NUMBER_LIMIT
} from '../src/constants/constants.js';
import { ZERO } from '../src/constants/wordsByNumbers.js';
import { ERROR_OUT_OF_LIMITS, ERROR_UNAVAILABLE_CHARACTER, ERROR_COMMAS_MESS } from '../src/constants/errors.js';

// Utils
import { getWordsOfNumberChunk } from '../src/utils/convert.js';
import { getErrorMessage } from '../src/utils/getErrorMessage.js';

// Gathering the whole string by parts
const getWordsFromNumber = (numberAsString) => {
    
    // If number === 0 just return the word
    if (numberAsString === '0') {
        return ZERO;
    }

    let wordsByChunks = [];
    
    // Make separate chunks of initial number
    // Example: 12,345,678,901,234 => 
    // hundreds: 234; thousands: 901; millions: 678; billions: 345; trillions: 12
    const [
        hundreds,
        thousands,
        millions,
        billions,
        trillions
    ] = numberAsString.split(',').reverse().map(number => number ? +number : '');

    if (trillions) {
        wordsByChunks.push({ value: trillions, name: TRILLION_STRING });
    }
    if (billions) {
        wordsByChunks.push({ value: billions, name: BILLION_STRING });
    }
    if (millions) {
        wordsByChunks.push({ value: millions, name: MILLION_STRING });
    }
    if (thousands) {
        wordsByChunks.push({ value: thousands, name: THOUSAND_STRING });
    }
    if (hundreds) {
        wordsByChunks.push({ value: hundreds, name: '' });
    }

    // Forming final string by chunks strings
    const resultString = wordsByChunks.reduce((acc, { value, name }, index) => {
        const isLastChunk = index === (wordsByChunks.length - 1)
        const wordsByChunk = getWordsOfNumberChunk({ value, isLastChunk, isPrevChunksFilled: wordsByChunks.length > 1, chunkNameString: name });
        return `${acc}${acc ? ', ' : ''}${wordsByChunk}`;
    }, '');
  
    return resultString;
}

// Parsing input of type string (stdin) to number
export default (numberAsString, limit) => {
    // mask of numbers with commas: 6,807; 143,562; 12,008 etc.
    const numberWithCommasRegex = /^(?:\d{1,3}(?:,\d{3})*|\d+)$/;
    
    // mask of only digits input: 6807; 143562; 12008 etc.
    const onlyNumberRegex = /^[,0-9]+$/;

    // mask to add commas to number
    const chunkWithThreeDigits = /\B(?=(\d{3})+(?!\d))/g;
    
    if (!onlyNumberRegex.test(numberAsString)) {
        // printing error in red since unavailable character was used
        console.error(chalk.red.bold(getErrorMessage(ERROR_UNAVAILABLE_CHARACTER)));
    } else if (!numberWithCommasRegex.test(numberAsString)) {
        // printing error in red since commas were used in incorrect way
        console.error(chalk.red.bold(getErrorMessage(ERROR_COMMAS_MESS)));
    } else {
        const parsedNumber = +(numberAsString.replace(/,/g, ''));
        // check number limits
        if (limit && parsedNumber > MAX_NUMBER_LIMIT) {
            // printing error in yellow since correct number was typed but over the limits
            console.error(chalk.yellow.bold(getErrorMessage(ERROR_OUT_OF_LIMITS)));
        } else {
            // add commas to string to easy parsing on the next step inside getWordsFromNumber
            const stringWithCommas = numberAsString.includes(',') 
                ? numberAsString 
                : numberAsString.replace(chunkWithThreeDigits, ',');
            // run the process of actual converting by call getWordsFromNumber
            // printing error in green as successful result of converting
            console.log(chalk.green.bold(getWordsFromNumber(stringWithCommas)));
        }
    }
}
