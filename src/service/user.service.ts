import { Request, Response } from "express";

export class UserService {
	private static instance: UserService;

	constructor() {
		if (UserService.instance) {
			return UserService.instance;
		}
		UserService.instance = this;
	}

	getAllUsers(req: Request, res: Response): Response {
		return res.status(200).json({ message: "Users page in contruction" });
	}

	getUser(req: Request, res: Response): Response {
		return res.status(200).json({ message: "Users page in contruction" });
	}

	createUser(req: Request, res: Response): Response {
		return res.status(200).json({ message: "Users page in contruction" });
	}

	deleteUser(req: Request, res: Response): Response {
		return res.status(200).json({ message: "Users page in contruction" });
	}
	updateUser(req: Request, res: Response): Response {
		return res.status(200).json({ message: "Users page in contruction" });
	}
}
