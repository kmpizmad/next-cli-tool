#!/usr/bin/env node

import { readFile } from 'fs';
import prompt, { nextConfigPath } from './cli';

readFile(nextConfigPath, { encoding: 'utf-8' }, (err, data) => {
  if (err) prompt();
  else console.log(JSON.parse(data));
});
