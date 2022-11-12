import { HookActionOption } from '../interfaces/ActionOption';
import capitalize from '../utils/capitalize';

const generateHook = (name: string, options: HookActionOption): void => {
  const [, _name]: string[] = name.toLowerCase().split('use');
  const filename: string = 'use' + capitalize(_name);

  console.log(filename, options);
};

export default generateHook;
