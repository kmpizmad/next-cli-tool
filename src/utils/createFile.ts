import { writeFile } from 'fs';
import { resolve } from 'path';
import { FileConfig, FilePath } from '../interfaces/Filename';

const createFilename = ({ type, name, pathname, stylesheet }: FileConfig): FilePath => {
  switch (type) {
    case 'component':
      return { path: resolve(pathname, `${name}.component.tsx`), filename: `${name}.component.tsx` };
    case 'style':
      return { path: resolve(pathname, `${name}.module.${stylesheet}`), filename: `${name}.module.${stylesheet}` };
    case 'lazy':
      return { path: resolve(pathname, `${name}.lazy.tsx`), filename: `${name}.lazy.tsx` };
    case 'test':
      return { path: resolve(pathname, `${name}.test.tsx`), filename: `${name}.test.tsx` };
    default:
      return { path: '', filename: '' };
  }
};

const createFile = (data: string, fileConfig: FileConfig): void => {
  const { path, filename } = createFilename(fileConfig);
  writeFile(path, data, { encoding: 'utf-8', flag: 'wx' }, err => {
    if (err) console.log(err);
    else console.log('Successfully created', filename);
  });
};

export default createFile;
