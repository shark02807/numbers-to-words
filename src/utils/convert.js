import {
    CARDINAL_NUMBER_MAX,
    CARDINAL_NUMBER_BASIC_MAX,
    SECOND_DECADE_NUMBER_MAX,
    HUNDRED_DELIMITER,
    TENS_DELIMITER,
    SECOND_DECADE_SUFFIX,
    BASIC_DECADE_SUFFIX,
    HUNDRED_STRING
} from '../constants/constants.js';
import {
    CardinalNumbersBasic,
    CardinalNumbersUnique,
    SecondDecadeNumbersPrefix,
    BasicDecadePrefix
} from '../constants/wordsByNumbers.js';

// Getting fully predefined word string for numbers 1 - 12
const getWordByCardinalNumber = (number) => {
    return number <= CARDINAL_NUMBER_BASIC_MAX ? CardinalNumbersBasic[number] : CardinalNumbersUnique[number];
}

// Getting words string for numbers 13 - 19
const getWordBySecondDecadeNumber = (number) => {
    const secondDecadeNumber = number % TENS_DELIMITER;
    return `${SecondDecadeNumbersPrefix[secondDecadeNumber]}${SECOND_DECADE_SUFFIX}`;
}

// Getting words string for numbers 20 - 99
const getWordByCommonDecadeNumber = (number) => {
    // first digit
    const integer = Math.floor(number / TENS_DELIMITER);
    // second digit
    const remain = number % TENS_DELIMITER;

    const integerString = `${BasicDecadePrefix[integer]}${BASIC_DECADE_SUFFIX}`;
    const remainString = remain ? `-${CardinalNumbersBasic[remain]}` : '';

    return `${integerString}${remainString}`;
}

// Getting words string for numbers 1 - 99
const getWordsOfTens = (tens) => {
    // Case when number <= 12 - using predefined words
    if (tens <= CARDINAL_NUMBER_MAX) {
        return getWordByCardinalNumber(tens);
    }

    // Case when 12 < number <= 19 - using base root and suffix teen
    if (tens <= SECOND_DECADE_NUMBER_MAX) {
        return getWordBySecondDecadeNumber(tens);
    }

    // Case when 19 < number <= 99 - using base root and suffix ty + cardinal number
    return getWordByCommonDecadeNumber(tens);
}

// Getting words string for numbers 1 - 999 - it could be billions, millions, thousands etc.
// number = 1-999
// isLastChunk = true if get hundreds chunk
// isPrevChunksFilled = true if initial number is bigger than 999
// chunkNameString = [billion, million, thousand]
export const getWordsOfNumberChunk = ({ value, isLastChunk = false, isPrevChunksFilled = false, chunkNameString = '' }) => {
    // get number of hundreds
    const hundreds = Math.floor(value / HUNDRED_DELIMITER);
    const hundredsString = hundreds ? `${CardinalNumbersBasic[hundreds]} ${HUNDRED_STRING}` : '';

    // get remain number 1-99
    const tens = value % HUNDRED_DELIMITER;
    const tensString = tens ? getWordsOfTens(tens) : '';

    let connectionString = hundreds && tens ? ' ' : '';
    if (isLastChunk) {
        // add 'and' for hundreds chunk if there is something previously
        connectionString = (isPrevChunksFilled || hundreds) && tens ? ' and ' : '';
    }

    return `${hundredsString}${connectionString}${tensString}${chunkNameString ? ` ${chunkNameString}` : ''}`;
}
