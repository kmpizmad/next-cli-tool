import { Command } from 'commander';
import actions from '../actions';
import { Answers } from '../interfaces/Answers';

export const generateComponent = (
  { cssPreprocessor, testingLib, isUsingInterfaces, isUsingArrowFunctions, isUsingNamedExports }: Answers,
  baseCommand: Command
): void => {
  baseCommand
    .command('component <name>')
    .alias('c')
    .option('-m, --module <name>', 'Generate component under a module', 'common')
    .option('-l, --lazy', 'Generates lazy file for component')
    .option('--no-story', 'Skips story file')
    .action((name, options) =>
      actions.component(name, {
        ...options,
        cssPreprocessor,
        testingLib,
        isUsingInterfaces,
        isUsingArrowFunctions,
        isUsingNamedExports,
      })
    )
    .description('Generates a component');
};

export const generatePage = (_config: Answers, baseCommand: Command): void => {
  baseCommand
    .command('page <name>')
    .alias('p')
    .option('--no-story', 'Skips story file')
    .action(actions.page)
    .description('Generates a page');
};

export const generateHook = (_config: Answers, baseCommand: Command): void => {
  baseCommand
    .command('hook <name>')
    .alias('h')
    .option('-m, --module <name>', 'Generate hook under a module')
    .action(actions.hook)
    .description('Generates a hook');
};

export const generateHoc = (_config: Answers, baseCommand: Command): void => {
  baseCommand.command('hoc <name>').action(actions.hoc).description('Generates a higher-order component');
};
