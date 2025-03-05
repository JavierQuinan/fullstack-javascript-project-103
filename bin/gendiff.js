import { program } from 'commander';
import path from 'path';
import { readFile } from '../src/fileReader.js';
import { parseFile } from '../src/parser.js';
import { compareFiles } from '../src/comparator.js';
import formatDiff from '../src/formatters/index.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format <type>', 'output format', 'stylish')
  .argument('<filepath1>', 'The path of the first file')
  .argument('<filepath2>', 'The path of the second file')
  .action((filepath1, filepath2, options) => {
    const fullPath1 = path.resolve(process.cwd(), filepath1);
    const fullPath2 = path.resolve(process.cwd(), filepath2);

    const content1 = readFile(fullPath1);
    const content2 = readFile(fullPath2);

    const data1 = parseFile(content1, fullPath1);
    const data2 = parseFile(content2, fullPath2);

    const diff = compareFiles(data1, data2);
    console.log(formatDiff(diff, options.format));
  });

program.parse();
