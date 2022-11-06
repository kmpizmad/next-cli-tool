#!/usr/bin/env node

import { readFile, readFileSync } from 'fs';
import { resolve } from 'path';
import prompt, { IAnswers, nextConfigPath } from './config';
import createProgram, { generateComponent, generateHoc, generateHook, generatePage } from './commands';

readFile(nextConfigPath, { encoding: 'utf-8' }, (err, data) => {
  let config: IAnswers | null = null;

  if (err) prompt(answers => console.log(answers));
  else config = JSON.parse(data);
  console.log('Config object:', config);

  const pkgPath: string = resolve(process.cwd(), 'package.json');
  const pkg: string = readFileSync(pkgPath, { encoding: 'utf-8' });
  const program = createProgram(JSON.parse(pkg));

  const generatorCommand = program.command('generate <type>').alias('g');

  generateComponent(generatorCommand);
  generatePage(generatorCommand);
  generateHook(generatorCommand);
  generateHoc(generatorCommand);

  generatorCommand.description('Defines what type of component to generate');

  program.parse();
});
