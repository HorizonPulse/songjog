import app from './app';
import { sequelize } from './db';
import { connectRedis } from './db/redis';
import Logger from './middleware/logger';

const PORT = process.env.PORT || 3000;
const logger = new Logger();
// Start Server with Graceful Startup
export async function startServer() {
  try {
    // connect to db and redis
    await sequelize.authenticate();
    logger.info('Connected to database successfully.');

    await connectRedis();
    logger.info('Connected to redis successfully.');

    // start server
    app.listen(PORT, () => {
      logger.info(`Server is started and running on port ${PORT}`);
    });
  } catch (error) {
    logger.error('Unable to start server', error);
    process.exit(1);
  }
}

// start the server
startServer();
