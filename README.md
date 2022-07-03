# NUMBERS-TO-WORDS-CLI

A CLI tool for converting the number into grammatically correct English words.
Currently supports numbers from 0 to 999 trillion (up to 1,000,000 by default limit).

## Installation

Clone the repository:

```
git clone https://github.com/shark02807/numbers-to-words.git
```
Or by SSH
```
git clone git@github.com:shark02807/numbers-to-words.git
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

To convert number to words

```
numbers-to-words convert [number]
```

For example:

```
numbers-to-words convert 987,453
```

Output:

```
nine hundred eighty-seven thousand, four hundred and fifty-three
```

Available characters:  digits and comma.

```
0 1 2 3 4 5 6 7 8 9 ,
```

It's possible to type number in both ways: as is and by using comma as delimiter.

Examples: 

```
310 | 5,240 | 1,000,000 | 6907 | 987,453
```

## Option Limit

By default the tool supports numbers up to 1,000,000. To switch off the limit use the option. In that case available numbers are up to 999,999,999,999,999.

Option

```
-n, --mo-limit
```

To convert numbers bigger than 1,000,000

```
numbers-to-words convert -n [number]
```
or
```
numbers-to-words convert --no-limit [number]
```

Example

```
numbers-to-words convert -n 12,345,678,901
```

Output

```
twelve billion, three hundred forty-five million, six hundred seventy-eight thousand, nine hundred and one
```

## Tests

To run test suits type the next command:

```
npm test
```

## Code check

To run linter check type the next command:

```
npm run lint
```
