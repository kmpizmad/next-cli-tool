#!/usr/bin/env node

import { readFile, readFileSync } from 'fs';
import { resolve } from 'path';
import { Command } from 'commander';
import prompt, { IAnswers, nextConfigPath } from './cli';

readFile(nextConfigPath, { encoding: 'utf-8' }, (err, data) => {
  const config: IAnswers | Promise<IAnswers> = err ? prompt() : JSON.parse(data);

  const pkg = readFileSync(resolve(process.cwd(), 'package.json'), { encoding: 'utf-8' });
  const { name, description, version } = JSON.parse(pkg);
  console.log(config);

  const program = new Command(name);

  program.description(description);
  program.version(version, '-v, --version');

  program.parse();
});
