import { writeFile } from 'fs';
import { resolve } from 'path';

const nextConfigPath: string = resolve(process.cwd(), 'next.json');

const createConfig = (answers: IAnswers): void => {
  writeFile(nextConfigPath, JSON.stringify(answers, null, 2), { encoding: 'utf-8' }, err => {
    if (err) console.log(err);
    else console.log('Successfully created next.json config file.');
  });
};

interface IAnswers {
  modules: ('pages' | 'components' | 'higher-order components' | 'hooks')[];
  modulesFolderName: string;
  cssPreprocessor: 'none' | 'css' | 'scss' | 'sass' | 'less';
  testingLib: 'none' | 'Testing Library';
  shouldGeneratePagesAsModules: boolean;
  isUsingArrowFunctions: boolean;
  isUsingInterfaces: boolean;
  isUsingNamedExports: boolean;
  isUsingStorybook: boolean;
}

export default createConfig;
export { nextConfigPath, IAnswers };
