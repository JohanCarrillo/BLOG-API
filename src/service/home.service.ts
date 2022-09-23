import { Request, Response } from "express";

export class HomeService {
	constructor() {
		console.log("creating HomeService instance");
	}
	getHome(req: Request, res: Response): Response {
		console.log("home service");
		return res.status(200).json({ message: "Home page in contruction" });
	}
}
