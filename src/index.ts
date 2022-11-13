#!/usr/bin/env node

import { readFile } from 'fs';
import { run } from './commands';
import prompt, { nextConfigPath } from './config';
import { Answers } from './interfaces/Answers';

readFile(nextConfigPath, { encoding: 'utf-8' }, (err, data) => {
  if (err) prompt(answers => run(answers));
  else run(JSON.parse(data) as Answers);
});
