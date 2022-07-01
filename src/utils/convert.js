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

// Getting words string for numbers 1 - 999
export const getWordsOfHundred = (number) => {
    // first digit
    const hundred = Math.floor(number / HUNDRED_DELIMITER);
    // remain digits - will get the string from separate method
    const tens = number % HUNDRED_DELIMITER;

    return {
        hundred: hundred ? `${CardinalNumbersBasic[hundred]} ${HUNDRED_STRING}` : '',
        tens: tens ? getWordsOfTens(tens) : ''
    };
}

// Forming string for numbers 1 - 999
export const getWordsStringByBigNumbers = (hundred, tens, bigNumberString, bigNumberRemain) => {
    return `${hundred}${hundred && tens ? ' ' : ''}${tens} ${bigNumberString}${bigNumberRemain ? ', ' : ''}`;
}
