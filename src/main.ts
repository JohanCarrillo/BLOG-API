import Express, { Application } from "express";
import dotenv from "dotenv";
// import * as winston from "winston"; // logger
import * as expressWinston from "express-winston";
import cors from "cors"; // used to allow access to the API from multiple fronts
import debug from "debug"; // debugger

dotenv.config();

import loggerOptions from "./config/logger.config";
import bindRoutes from "./routes/utils/indexRoutes";

function main() {
	const app: Application = Express();
	const debugLog: debug.IDebugger = debug("app");

	// global middlewares
	app.use(Express.json()); // body-parser to json
	app.use(Express.urlencoded({ extended: false })); // parser from url
	app.use(cors());

	// req logger
	app.use(expressWinston.logger(loggerOptions));

	// attach routes
	bindRoutes(app);

	// error logger
	app.use(expressWinston.errorLogger(loggerOptions));

	const port: number = Number(process.env.SERVER_PORT) || 3000;
	app.listen(port, (): void => {
		console.log(`listening on port ${port}`);
		debugLog("started in debug mode");
	});
}

main();
