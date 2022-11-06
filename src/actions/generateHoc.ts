import capitalize from '../utils/capitalize';

const generateHoc = (name: string): void => {
  const filename: string = 'with' + capitalize(name);
  console.log(filename);
};

export default generateHoc;
