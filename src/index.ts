#!/usr/bin/env node
import { Command } from 'commander';

import { getPackageInfo } from './utils/get-package-info';
import { generate } from './commands/generate';

process.on('SIGINT', () => process.exit(0));
process.on('SIGTERM', () => process.exit(0));

async function main() {
  const packageInfo = await getPackageInfo();

  const program = new Command()
    .name('rest-codegen')
    .description('generate types from REST API')
    .version(
      packageInfo.version || '1.0.0',
      '-v, --version',
      'display the version number'
    );

  program.addCommand(generate);

  program.parse();
}

main();
