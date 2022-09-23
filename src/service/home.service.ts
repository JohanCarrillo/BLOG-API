import { Request, Response } from "express";

export class HomeService {
	private static instance: HomeService;

	constructor() {
		if (HomeService.instance) {
			return HomeService.instance;
		}
		HomeService.instance = this;
	}

	getHome(req: Request, res: Response): Response {
		console.log("home service");
		return res.status(200).json({ message: "Home page in contruction" });
	}
}
