export interface Repository {
  url: string;
  type: string;
}

export interface Author {
  email: string;
  name: string;
}

export interface PublishConfig {
  access: string;
}

export interface Engines {
  npm: string;
  node: string;
}

export interface Scripts {
  build: string;
  lint: string;
  format: string;
  prepare: string;
}

export interface DevDependencies {
  '@types/inquirer': string;
  '@types/node': string;
  '@typescript-eslint/eslint-plugin': string;
  '@typescript-eslint/parser': string;
  'eslint': string;
  'eslint-config-prettier': string;
  'eslint-plugin-etc': string;
  'eslint-plugin-prefer-arrow': string;
  'husky': string;
  'prettier': string;
  'typescript': string;
}

export interface Dependencies {
  commander: string;
  inquirer: string;
}

export interface PackageJson {
  private: boolean;
  deprecated: boolean;
  name: string;
  type: string;
  version: string;
  description: string;
  homepage: string;
  keywords: string[];
  repository: Repository;
  contributors: string[];
  author: Author;
  license: string;
  publishConfig: PublishConfig;
  main: string;
  bin: string;
  engines: Engines;
  scripts: Scripts;
  devDependencies: DevDependencies;
  dependencies: Dependencies;
}
