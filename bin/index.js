#!/usr/bin/env node

import { program } from 'commander';
import convert from '../commands/convert.js';

program
    .command('convert')
    .description('Converts the number into grammatically correct English words.')
    .argument('[number]', 'Number you\'d like to convert.')
    .action(convert);

program.addHelpText('after', `
Example call:
    $ numbers-to-words convert 200`);

program.parse()
