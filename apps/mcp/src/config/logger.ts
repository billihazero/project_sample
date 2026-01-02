import pino from "pino";

const isDev = process.env.NODE_ENV !== "production";

const logger = pino(
  {
    level: process.env.LOG_LEVEL ?? "info",
  },
  isDev
    ? pino.transport({
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "SYS:yyyy-mm-dd HH:MM:ss.l",
          singleLine: true,
        },
      })
    : undefined // prod: JSON 로그 그대로 stdout
);

export default logger;
