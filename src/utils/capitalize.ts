const capitalize = (str: string): string => {
  return !!str ? str : str[0].toUpperCase() + str.substring(1);
};

export default capitalize;
