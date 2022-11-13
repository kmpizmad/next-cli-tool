import { writeFile } from 'fs';
import { resolve } from 'path';
import { Answers } from '../interfaces/Answers';

const nextConfigPath: string = resolve(process.cwd(), 'next.json');

const createConfig = (answers: Answers): void => {
  writeFile(nextConfigPath, JSON.stringify(answers, null, 2), { encoding: 'utf-8' }, err => {
    if (err) console.log(err);
    else console.log('Successfully created next.json config file.');
  });
};

export default createConfig;
export { nextConfigPath };
