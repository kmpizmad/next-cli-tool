import capitalize from '../utils/capitalize';

const generateHoc = (name: string): void => {
  const [, _name]: string[] = name.toLowerCase().split('with');
  const filename: string = 'with' + capitalize(_name);

  console.log(filename);
};

export default generateHoc;
