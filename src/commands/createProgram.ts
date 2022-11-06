import { Command } from 'commander';
import { PackageJson } from '../interfaces/PackageJson';

const createProgram = (pkg: PackageJson): Command => {
  const { name, description, version } = pkg;
  const program = new Command(name);

  program.description(description);
  program.version(version, '-v, --version');

  return program;
};

export default createProgram;
