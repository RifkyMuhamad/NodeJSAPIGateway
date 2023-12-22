import winston from "winston";

// create logger
export const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});
