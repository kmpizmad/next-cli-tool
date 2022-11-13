import { mkdir } from 'fs';
import { resolve } from 'path';
import { ComponentActionOption } from '../interfaces/ActionOption';
import { ComponentTemplate } from '../interfaces/Template';
import createTemplate from '../templates/component';
import createLazy from '../templates/lazy';
import createStylesheet from '../templates/stylesheet';
import capitalize from '../utils/capitalize';
import createFile from '../utils/createFile';

const generateComponent = (name: string, options: ComponentActionOption & ComponentTemplate): void => {
  const { module, lazy, story, ...opts } = options;
  const [_name]: string[] = name.toLowerCase().split('component');
  const moduleName: string = capitalize(_name);
  const pathname: string = resolve(process.cwd(), 'src', 'modules', module, moduleName);
  const filename: string = moduleName + 'Component';

  mkdir(pathname, { recursive: true }, err => {
    if (err) return console.log(err);

    createFile(createTemplate(filename, opts), {
      type: 'component',
      pathname,
      name: moduleName,
    });

    if (lazy) {
      createFile(
        createLazy(filename, {
          componentPath: `./${moduleName}.component.tsx`,
          isUsingArrowFunctions: opts.isUsingArrowFunctions,
          isUsingNamedExports: opts.isUsingNamedExports,
        }),
        {
          type: 'lazy',
          pathname,
          name: moduleName,
        }
      );
    }

    if (opts.cssPreprocessor !== 'none') {
      createFile(createStylesheet(filename), {
        type: 'style',
        pathname,
        name: moduleName,
        stylesheet: opts.cssPreprocessor,
      });
    }

    // todo: create test template
    if (opts.testingLib !== 'none') {
      createFile(createTemplate(filename, opts), {
        type: 'test',
        pathname,
        name: moduleName,
      });
    }
  });

  if (story) console.log('Has story');
};

export default generateComponent;
