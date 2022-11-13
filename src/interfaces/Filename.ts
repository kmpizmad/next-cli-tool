import { Answers } from './Answers';

export interface FilePath {
  path: string;
  filename: string;
}

export type FileConfig =
  | {
      type: 'component' | 'lazy' | 'test';
      name: string;
      pathname: string;
      stylesheet?: never;
    }
  | {
      type: 'style';
      name: string;
      pathname: string;
      stylesheet: Exclude<Answers['cssPreprocessor'], 'none'>;
    };
