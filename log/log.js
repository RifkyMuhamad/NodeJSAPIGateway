import winston from "winston";

/**
 * Object logger for custom logging
 *
 * @type { winston.Logger }
 */
export const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});
