// src/Logger.ts
import path from 'path';
import pino from 'pino';
import caller from 'pino-caller';

class Logger {
  private logger: pino.Logger;

  constructor() {
    const baseLogger = pino({
      level: process.env.LOG_LEVEL || 'info',
      formatters: {
        level: (label) => {
          return { level: label };
        }
      },
      redact: {
        paths: ['pid', 'hostname'],
        remove: true
      }
    });

    this.logger = caller(baseLogger, {
      stackAdjustment: 1,
      relativeTo: path.resolve(__dirname, '..')
    });
  }

  private formatMessage(message: string, args: any[]): string {
    return [message, ...args].join('  ');
  }

  private formatError(err: Error): string {
    return `${err.name}: ${err.message} ${err.stack}`;
  }

  private checkForError(arg: any): string | undefined {
    if (arg instanceof Error) {
      return this.formatError(arg);
    }

    return undefined;
  }

  info(message: string, ...args: any[]) {
    this.logger.info(this.formatMessage(message, args));
  }

  error(message: string, e: any) {
    const errorMessage = this.checkForError(e);
    if (errorMessage) {
      this.logger.error(`${message}  ${errorMessage}`);
    } else {
      this.logger.error(message);
    }
  }

  warn(message: string, ...args: any[]) {
    this.logger.warn(message, ...args);
  }
}

export default Logger;
