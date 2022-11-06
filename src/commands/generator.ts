import { Command } from 'commander';
import actions from '../actions';

export const generateComponent = (baseCommand: Command): void => {
  baseCommand.command('component <name>').alias('c').action(actions.component).description('Generates a component');
};

export const generatePage = (baseCommand: Command): void => {
  baseCommand.command('page <name>').alias('p').action(actions.page).description('Generates a page');
};

export const generateHook = (baseCommand: Command): void => {
  baseCommand.command('hook <name>').alias('h').action(actions.hook).description('Generates a hook');
};

export const generateHoc = (baseCommand: Command): void => {
  baseCommand.command('hoc <name>').alias('H').action(actions.hoc).description('Generates a higher-order component');
};
