import inquier from 'inquirer';
import { Answers } from '../interfaces/Answers';
import createConfig from './createConfig';

const prompt = (callback?: (answers: Answers) => void): void => {
  inquier
    .prompt<Answers>([
      {
        type: 'checkbox',
        message: 'What modules do you want to generate?',
        name: 'modules',
        choices: ['pages', 'components', 'higher-order components', 'hooks'],
        default: ['components'],
      },
      {
        type: 'input',
        message: 'What is the name of your modules folder?',
        name: 'modulesFolderName',
        default: 'modules',
      },
      {
        type: 'confirm',
        message: 'Do you prefer arrow functions?',
        name: 'isUsingArrowFunctions',
        default: false,
      },
      {
        type: 'confirm',
        message: 'Do you prefer interfaces?',
        name: 'isUsingInterfaces',
        default: false,
      },
      {
        type: 'confirm',
        message: 'Do you prefer named exports?',
        name: 'isUsingNamedExports',
        default: false,
      },
      {
        type: 'list',
        message: 'Which CSS preprocessor do you use?',
        name: 'cssPreprocessor',
        choices: ['none', 'css', 'scss', 'sass', 'less'],
      },
      {
        type: 'list',
        message: 'Which testing library do you use?',
        name: 'testingLib',
        choices: ['none', 'Testing Library'],
      },
      {
        type: 'confirm',
        message: 'Do you use Storybook?',
        name: 'isUsingStorybook',
        default: false,
      },
    ])
    .then(answers => {
      callback ? callback(answers) : createConfig(answers);
    });
};

export default prompt;
