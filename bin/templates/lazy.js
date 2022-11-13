"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var os_1 = require("os");
var createLazy = function (name, _a) {
    var componentPath = _a.componentPath, isUsingArrowFunctions = _a.isUsingArrowFunctions, isUsingNamedExports = _a.isUsingNamedExports;
    var dynamic = "import dynamic from 'next/dynamic';".concat(os_1.EOL);
    var suspense = "import { Suspense } from 'react';".concat(os_1.EOL);
    var props = "import { ".concat(name, "Props } from '").concat(componentPath, "';").concat(os_1.EOL).concat(os_1.EOL);
    var dynamicDef = "const Dynamic".concat(name, " = dynamic(() => import('").concat(componentPath, "'), {").concat(os_1.EOL);
    var dynamicEndDef = "});".concat(os_1.EOL).concat(os_1.EOL);
    var dynamicBody = "  suspense: true,".concat(os_1.EOL);
    var fnExport = isUsingNamedExports ? 'export ' : '';
    var fnName = isUsingArrowFunctions
        ? "const ".concat(name, ": React.FC<").concat(name, "Props> = props =>")
        : "function ".concat(name, "(props: ").concat(name, "Props)");
    var fnDef = "".concat(fnExport).concat(fnName, " {").concat(os_1.EOL);
    var fnEndDef = "};".concat(os_1.EOL).concat(os_1.EOL);
    var returnStatement = [
        "  return (".concat(os_1.EOL),
        "    <Suspense fallback={'Loading...'}>".concat(os_1.EOL),
        "      <Dynamic".concat(name, " {...props} />").concat(os_1.EOL),
        "    </Suspense>".concat(os_1.EOL),
        "  );".concat(os_1.EOL),
    ].join('');
    var defaultExport = isUsingNamedExports ? '' : "export default ".concat(name).concat(os_1.EOL);
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
exports.default = createLazy;
