import { EOL } from 'os';
import { LazyTemplate } from '../interfaces/Template';

const createLazy = (
  name: string,
  { componentPath, isUsingArrowFunctions, isUsingNamedExports }: LazyTemplate
): string => {
  // imports
  const dynamic = `import dynamic from 'next/dynamic';${EOL}`;
  const suspense = `import { Suspense } from 'react';${EOL}`;
  const props = `import { ${name}Props } from '${componentPath}';${EOL}${EOL}`;

  // dynamic imports
  const dynamicDef = `const Dynamic${name} = dynamic(() => import('${componentPath}'), {${EOL}`;
  const dynamicEndDef = `});${EOL}${EOL}`;
  const dynamicBody = `  suspense: true,${EOL}`;

  // function declaration
  const fnExport = isUsingNamedExports ? 'export ' : '';
  const fnName = isUsingArrowFunctions
    ? `const ${name}: React.FC<${name}Props> = props =>`
    : `function ${name}(props: ${name}Props)`;
  const fnDef = `${fnExport}${fnName} {${EOL}`;
  const fnEndDef = `};${EOL}${EOL}`;
  const returnStatement = [
    `  return (${EOL}`,
    `    <Suspense fallback={'Loading...'}>${EOL}`,
    `      <Dynamic${name} {...props} />${EOL}`,
    `    </Suspense>${EOL}`,
    `  );${EOL}`,
  ].join('');

  // exports
  const defaultExport = isUsingNamedExports ? '' : `export default ${name}${EOL}`;

  return [
    dynamic,
    suspense,
    props,
    dynamicDef,
    dynamicBody,
    dynamicEndDef,
    fnDef,
    returnStatement,
    fnEndDef,
    defaultExport,
  ].join('');
};

export default createLazy;
