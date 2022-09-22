import Express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = Express();

app.use(Express.json()); // body-parser to json
app.use(Express.urlencoded({ extended: false })); // parser from url

app.get("/", (req: Request, res: Response): void => {
	res.json({ message: "Hello, world!" });
});

const port: number = Number(process.env.PORT) || 3000;
app.listen(port, (): void => {
	console.log(`listening on port ${port}`);
});
