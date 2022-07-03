// Limit
export const LIMIT_MAX_NUMBER = 1000000;

// Constants to define rules of words forming for cardinal numbers
export const CARDINAL_NUMBER_BASIC_MAX = 9;
export const CARDINAL_NUMBER_MAX = 12;
export const SECOND_DECADE_NUMBER_MAX = 19;

// Delimiters
export const HUNDRED_DELIMITER = 100;
export const TENS_DELIMITER = 10;

// Suffixes
export const SECOND_DECADE_SUFFIX = 'teen';
export const BASIC_DECADE_SUFFIX = 'ty';

// Names of amounts
export const HUNDRED_STRING = 'hundred';
export const THOUSAND_STRING = 'thousand';
export const MILLION_STRING = 'million';
export const BILLION_STRING = 'billion';
export const TRILLION_STRING = 'trillion';

// Regex
// mask to put commas into number: 111222333 -> 111,222,333
export const REGEX_THREE_DIGITS_CHUNK = /\B(?=(\d{3})+(?!\d))/g;
// mask of numbers with commas: 6,807; 143,562; 12,008 etc.
export const REGEX_COMMAS_ORDER = /^(?:\d{1,3}(?:,\d{3})*|\d+)$/;
// mask of only digits and comma in input: 6807; 143,562; 12008 etc.
export const REGEX_SUPPORTED_SYMBOLS = /^[,0-9]+$/;
