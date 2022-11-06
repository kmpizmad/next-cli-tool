import capitalize from '../utils/capitalize';

const generatePage = (name: string): void => {
  const filename: string = capitalize(name) + 'Page';
  console.log(filename);
};

export default generatePage;
