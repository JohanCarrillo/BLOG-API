import * as winston from "winston";
import * as expressWinston from "express-winston";

const loggerOptions: expressWinston.LoggerOptions = {
	transports: [new winston.transports.Console()],
	format: winston.format.combine(
		winston.format.json(),
		winston.format.prettyPrint(),
		winston.format.colorize({ all: true })
		// winston.format.errors({ stack: true })
	),
	meta: true,
	requestWhitelist: [
		"url",
		"headers",
		"method",
		"httpVersion",
		"originalUrl",
		"query",
		"session",
		"body",
	],
	// responseWhitelist: [],
	// bodyBlacklist: ["password"],
};

if (!process.env.DEBUG) {
	loggerOptions.meta = false; // when not debugging, log requests as one-liners
}

export default loggerOptions;
