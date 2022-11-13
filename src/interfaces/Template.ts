import { Answers } from './Answers';

export type ComponentTemplate = Pick<
  Answers,
  'cssPreprocessor' | 'testingLib' | 'isUsingInterfaces' | 'isUsingArrowFunctions' | 'isUsingNamedExports'
>;

export type LazyTemplate = { componentPath: string } & Pick<
  ComponentTemplate,
  'isUsingNamedExports' | 'isUsingArrowFunctions'
>;
