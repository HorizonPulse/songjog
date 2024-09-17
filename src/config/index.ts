import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import fs from 'fs';
import path from 'path';
import defaultConfigs from './config';

export const rootPath = path.resolve(__filename, '../../../');

const environments = ['production', 'development'];
const dotenvFiles = [
  `${rootPath}/.env`,
  `${rootPath}/.env.${process.env.NODE_ENV || 'development'}`
];

dotenvFiles.forEach((dotenvFile) => {
  if (fs.existsSync(dotenvFile)) {
    dotenvExpand.expand(
      dotenv.config({
        path: dotenvFile
      })
    );
  }
});

const configs = defaultConfigs(environments);
export default configs;
