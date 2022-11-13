import { EOL } from 'os';
import { ComponentTemplate } from '../interfaces/Template';

const createTemplate = (
  name: string,
  { cssPreprocessor, testingLib, isUsingInterfaces, isUsingArrowFunctions, isUsingNamedExports }: ComponentTemplate
): string => {
  // stylesheet definition if any
  const stylesheetDef = cssPreprocessor !== 'none' ? `import './${name}.${cssPreprocessor}';${EOL}${EOL}` : '';

  // property definition
  const propType = isUsingInterfaces ? 'interface Props {}' : 'type Props = {}';
  const propDef = `${propType}${EOL}${EOL}`;

  // function declaration
  const fnExport = isUsingNamedExports ? 'export ' : '';
  const fnName = isUsingArrowFunctions ? `const ${name}: React.FC<Props> = props =>` : `function ${name}(props: Props)`;
  const fnDef = `${fnExport}${fnName} {${EOL}`;
  const fnEndDef = `};${EOL}${EOL}`;

  // function body definition
  const className = cssPreprocessor !== 'none' ? ` className="${name}"` : '';
  const testid = testingLib !== 'none' ? ` data-testid="${name}"` : '';
  const returnStatement = `  return <div${className}${testid}>${name} works!</div>;${EOL}`;

  // exports
  const typeExport = `export type ${name}Props = Readonly<Props>;${EOL}`;
  const defaultExport = isUsingNamedExports ? '' : `export default ${name}${EOL}`;

  return [stylesheetDef, propDef, fnDef, returnStatement, fnEndDef, typeExport, defaultExport].join('');
};

export default createTemplate;
