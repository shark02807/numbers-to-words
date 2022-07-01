export const ZERO = 'zero';

export const CardinalNumbersBasic = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
};

export const CardinalNumbersUnique = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve'
};

// Prefixes for numbers 13 - 19 with suffix "teen"
export const SecondDecadeNumbersPrefix = {
    3: 'thir',
    4: 'four',
    5: 'fif',
    6: 'six',
    7: 'seven',
    8: 'eigh',
    9: 'nine'
};

// Prefixes for decades numbers 20 - 90 with suffix "ty"
export const BasicDecadePrefix = {
    ...SecondDecadeNumbersPrefix,
    2: 'twen',
    4: 'for'
}
