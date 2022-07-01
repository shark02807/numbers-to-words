#!/usr/bin/env node

import { program } from 'commander';
import convert from '../commands/convert.js';

program
    .name('numbers-to-words')
    .description(`
Description:
    Available characters:  digits (0-9) and comma (,).
    It's possible to type number in both ways: as is and by using comma as delimiter.
    Examples: 310 | 5,240 | 1,000,000 | 6907 | 987,453.
    Currently supports numbers from 0 to 1,000,000.

Example call:
    $ numbers-to-words convert 987,453
Output:
    nine hundred eighty-seven thousand, four hundred and fifty-three
    `)
    .version('1.0.0');

program
    .command('convert')
    .description('Converts the number into grammatically correct English words.')
    .argument('[number]', 'Number you\'d like to convert.')
    .action(convert);

program.parse();
