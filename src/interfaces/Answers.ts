export interface Answers {
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
