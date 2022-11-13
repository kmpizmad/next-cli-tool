import { resolve } from 'path';
import { readFileSync } from 'fs';
import createProgram from './createProgram';
import { generateComponent, generatePage, generateHook, generateHoc } from './generator';
import { Answers } from '../interfaces/Answers';

export default createProgram;
export * from './generator';

export const run = (config: Answers): void => {
  const pkgPath: string = resolve(process.cwd(), 'package.json');
  const pkg: string = readFileSync(pkgPath, { encoding: 'utf-8' });
  const program = createProgram(JSON.parse(pkg));

  const generatorCommand = program.command('generate <type>').alias('g');

  if (config.modules.includes('components')) generateComponent(config, generatorCommand);
  if (config.modules.includes('pages')) generatePage(config, generatorCommand);
  if (config.modules.includes('hooks')) generateHook(config, generatorCommand);
  if (config.modules.includes('higher-order components')) generateHoc(config, generatorCommand);

  generatorCommand.description('Defines what type of component to generate');

  program.parse();
};
