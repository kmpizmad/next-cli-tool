import capitalize from '../utils/capitalize';

const generateHook = (name: string): void => {
  const filename: string = 'use' + capitalize(name);
  console.log(filename);
};

export default generateHook;
