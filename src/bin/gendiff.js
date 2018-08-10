#!/usr/bin/env node
import program from 'commander';
import diff from '..';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference')
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'output format', 'recursive')
  .action((firstConfig, secondConfig) =>
    console.log(diff(firstConfig, secondConfig, program.format)));

program.parse(process.argv);
