import { resolve } from 'path';
import { readFileSync } from 'fs';
import { IAnswers } from '../config';
import createProgram from './createProgram';
import { generateComponent, generatePage, generateHook, generateHoc } from './generator';

export default createProgram;
export * from './generator';

export const run = (config: IAnswers): void => {
  const pkgPath: string = resolve(process.cwd(), 'package.json');
  const pkg: string = readFileSync(pkgPath, { encoding: 'utf-8' });
  const program = createProgram(JSON.parse(pkg));

  const generatorCommand = program.command('generate <type>').alias('g');

  if (config.modules.includes('components')) generateComponent(generatorCommand);
  if (config.modules.includes('pages')) generatePage(generatorCommand);
  if (config.modules.includes('hooks')) generateHook(generatorCommand);
  if (config.modules.includes('higher-order components')) generateHoc(generatorCommand);

  generatorCommand.description('Defines what type of component to generate');

  program.parse();
};
