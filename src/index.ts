#!/usr/bin/env node

import { readFile } from 'fs';
import { run } from './commands';
import prompt, { IAnswers, nextConfigPath } from './config';

readFile(nextConfigPath, { encoding: 'utf-8' }, (err, data) => {
  if (err) prompt(answers => run(answers));
  else run(JSON.parse(data) as IAnswers);
});
