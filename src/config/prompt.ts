import inquier from 'inquirer';
import createConfig, { IAnswers } from './createConfig';

const prompt = (callback?: (answers: IAnswers) => void): void => {
  inquier
    .prompt<IAnswers>([
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
        message: 'Do you want to generate your pages as modules?',
        name: 'shouldGeneratePagesAsModules',
        default: false,
        when: answers => answers.modules.includes('pages'),
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
