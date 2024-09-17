import convict from 'convict';

export default (environments: string[]) =>
  convict({
    env: {
      doc: 'The application environment',
      format: environments,
      default: 'development',
      env: 'NODE_ENV'
    },
    redis: {
      host: {
        doc: 'Redis server address',
        format: String,
        default: '127.0.0.1',
        env: 'REDIS_HOST'
      },
      port: {
        doc: 'Redis port',
        format: 'port',
        default: 6379,
        env: 'REDIS_PORT'
      }
    },
    postgres: {
      host: {
        doc: 'Postgres server address',
        format: String,
        default: '127.0.0.1',
        env: 'POSTGRES_HOST'
      },
      port: {
        doc: 'Postgres port',
        format: 'port',
        default: 5432,
        env: 'POSTGRES_PORT'
      },
      user: {
        doc: 'Postgres user',
        format: String,
        default: 'postgres',
        env: 'POSTGRES_USER'
      },
      password: {
        doc: 'Postgres password',
        sensitive: true,
        format: String,
        default: 'postgres',
        env: 'POSTGRES_PASSWORD'
      },
      database: {
        doc: 'Postgres database',
        format: String,
        default: 'quickstart',
        env: 'POSTGRES_DATABASE'
      },
      pool: {
        min: {
          doc: 'Postgres pool min',
          format: 'int',
          default: 1,
          env: 'POSTGRES_POOL_MIN'
        },
        max: {
          doc: 'Postgres pool max',
          format: 'int',
          default: 2,
          env: 'POSTGRES_POOL_MAX'
        },
        acquire: {
          doc: 'Postgres pool acquire timeout',
          format: 'int',
          default: 10000,
          env: 'POSTGRES_POOL_ACQUIRE'
        },
        idle: {
          doc: 'Postgres pool idle timeout',
          format: 'int',
          default: 60000,
          env: 'POSTGRES_POOL_IDLE'
        }
      }
    },
    jwt: {
      secret: {
        doc: 'JWT secret',
        format: String,
        default: 'b3b4b5b6b7b8b9b0',
        env: 'JWT_SECRET'
      }
    }
  });
