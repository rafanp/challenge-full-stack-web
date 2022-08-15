import 'dotenv/config';
import * as enValid from 'envalid';

const env = enValid.cleanEnv(process.env, {
  NODE_ENV: enValid.str({
    choices: ['development', 'test', 'production'],
    default: 'development',
  }),
  APP_API_URL: enValid.url({
    example: 'http://localhost:3333',
    devDefault: 'http://localhost:3333',
  }),
  POSTGRES_HOST: enValid.str({
    devDefault: 'localhost',
    example: 'localhost',
  }),
  POSTGRES_PORT: enValid.port({
    devDefault: 5432,
    example: '5432',
  }),
  POSTGRES_USER: enValid.str({
    devDefault: 'docker',
    example: 'docker',
  }),
  POSTGRES_PASS: enValid.str({
    devDefault: 'docker',
    example: 'docker',
  }),
  POSTGRES_DB_NANE: enValid.str({
    devDefault: 'academic',
    example: 'academic',
  }),
  REDIS_HOST: enValid.str({
    devDefault: 'localhost',
    example: 'localhost',
  }),
  REDIS_PORT: enValid.port({
    devDefault: 6379,
    example: '6379',
  }),
  REDIS_PASS: enValid.str({
    devDefault: '',
    example: 'redis_password',
  }),
  SENTRY_DSN_URL: enValid.str({
    devDefault: '',
  }),
});

export { env };
