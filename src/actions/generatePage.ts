import { PageActionOptions } from '../interfaces/ActionOption';
import capitalize from '../utils/capitalize';

const generatePage = (name: string, options: PageActionOptions): void => {
  const [_name]: string[] = name.toLowerCase().split('page');
  const filename: string = capitalize(_name) + 'Page';

  console.log(filename, options);
};

export default generatePage;
