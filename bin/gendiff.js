#!/usr/bin/env node

import { program } from "commander";
import path from 'path';
import { readFile } from '../src/fileReader.js';
import { parseFile } from '../src/parser.js';
import { compareFiles } from '../src/comparator.js';

program
  .name('gendiff')
  .description('Compares two configuration files (JSON/YAML) and shows differences.')
  .version('0.0.1')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>', 'The path of the first file')
  .argument('<filepath2>', 'The path of the second file')
  .action((filepath1, filepath2) => {
    const fullPath1 = path.resolve(process.cwd(), filepath1);
    const fullPath2 = path.resolve(process.cwd(), filepath2);

    console.log('filepath1:', fullPath1);
    console.log('filepath2:', fullPath2);

    // Parseamos archivos JSON o YAML automáticamente
    const data1 = parseFile(fullPath1);
    const data2 = parseFile(fullPath2);

    const diff = compareFiles(data1, data2);
    console.log(diff);
  })
  .parse();
