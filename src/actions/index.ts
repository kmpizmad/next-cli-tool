import generateComponent from './generateComponent';
import generatePage from './generatePage';
import generateHook from './generateHook';
import generateHoc from './generateHoc';

const actions = { component: generateComponent, page: generatePage, hook: generateHook, hoc: generateHoc };

export default actions;
