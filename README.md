# NUMBERS-TO-WORDS-CLI

A CLI tool for converting the number into grammatically correct English words.

## Installation

Clone the repository:

```
git clone https://github.com/shark02807/numbers-to-words.git
```
Or by SSH
```
git@github.com:shark02807/numbers-to-words.git
```

Install the dependencies:

```
npm i
```

Install the package globally on your machine:

```
npm i -g
```

## Usage

1. To convert number to words

```
numbers-to-words convert [number]
```

For example:

```
numbers-to-words convert 7,634,189
```

Output:

```
seven million, six hundred thirty-four thousand, one hundred and eighty-nine
```

Use only 0-9 digits. It\'s possible to use comma as delimiter. Examples: 310; 5,240; 6,056,700; 6907.
