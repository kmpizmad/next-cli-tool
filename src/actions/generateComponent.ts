import capitalize from '../utils/capitalize';

const generateComponent = (name: string): void => {
  const filename: string = capitalize(name) + 'Component';
  console.log(filename);
};

export default generateComponent;
