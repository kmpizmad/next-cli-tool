import { Command } from 'commander';
import actions from '../actions';

export const generateComponent = (baseCommand: Command): void => {
  baseCommand
    .command('component <name>')
    .alias('c')
    .option('-m, --module <name>', 'Generate component under a module', 'common')
    .option('-l, --lazy', 'Generates lazy file for component')
    .option('--no-style', 'Skips stylesheet')
    .option('--no-test', 'Skips test file')
    .option('--no-story', 'Skips story file')
    .action(actions.component)
    .description('Generates a component');
};

export const generatePage = (baseCommand: Command): void => {
  baseCommand
    .command('page <name>')
    .alias('p')
    .option('--no-story', 'Skips story file')
    .action(actions.page)
    .description('Generates a page');
};

export const generateHook = (baseCommand: Command): void => {
  baseCommand
    .command('hook <name>')
    .alias('h')
    .option('-m, --module <name>', 'Generate hook under a module')
    .action(actions.hook)
    .description('Generates a hook');
};

export const generateHoc = (baseCommand: Command): void => {
  baseCommand.command('hoc <name>').action(actions.hoc).description('Generates a higher-order component');
};
