import Express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

import bindRoutes from "./routes/utils/indexRoutes";

dotenv.config();

function main() {
	const app: Application = Express();

	app.use(Express.json()); // body-parser to json
	app.use(Express.urlencoded({ extended: false })); // parser from url

	bindRoutes(app);

	const port: number = Number(process.env.PORT) || 3000;
	app.listen(port, (): void => {
		console.log(`listening on port ${port}`);
	});
	// console.log(app);
}

main();
