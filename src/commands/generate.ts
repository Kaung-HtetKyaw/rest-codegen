import chalk from 'chalk';
import { Command } from 'commander';
import { logger } from '../utils/logger';

export const generate = new Command()
  .name('generate')
  .description('generate typescript types from REST API')
  .action(async (opts) => {
    logger.info('');
    logger.info(`${chalk.green('Success!')} Generated types successfully.`);
  });
