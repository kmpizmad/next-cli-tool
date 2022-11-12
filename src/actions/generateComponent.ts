import { ComponentActionOption } from '../interfaces/ActionOption';
import capitalize from '../utils/capitalize';

const generateComponent = (name: string, options: ComponentActionOption): void => {
  const [_name]: string[] = name.toLowerCase().split('component');
  const filename: string = capitalize(_name) + 'Component';

  console.log(filename, options);
};

export default generateComponent;
