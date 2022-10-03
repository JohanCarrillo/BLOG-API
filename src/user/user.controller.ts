import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
	private static instance: UserController;
	private userService!: UserService;

	constructor(userService: UserService) {
		if (UserController.instance) {
			return UserController.instance;
		}
		this.userService = userService;
		UserController.instance = this;
	}

	// all methods must be endpoints

	async createUser(req: Request, res: Response, next: NextFunction) {
		try {
			const user = await this.userService.create(req.body);
			// handle errors for wrong input and server
		} catch (error) {
			next(error);
		}
	}

	async getAllUsers(req: Request, res: Response, next: NextFunction) {
		try {
			const users = await this.userService.getAll();
		} catch (error) {
			next(error);
		}
	}

	async getUserById(req: Request, res: Response, next: NextFunction) {
		try {
			const user = await this.userService.getById(req.params.userId);
			if (user === null) res.status(404).json({ msj: "User not found" });
		} catch (error) {
			next();
		}
	}

	async getUserByEmail(req: Request, res: Response, next: NextFunction) {
		try {
			const user = await this.userService.getByEmail(req.params.userEmail);
		} catch (error) {
			next(error);
		}
	}

	async deleteUser(req: Request, res: Response, next: NextFunction) {
		try {
			await this.userService.deleteById(req.params.userId);
		} catch (error) {
			next(error);
		}
	}

	async putUser(req: Request, res: Response, next: NextFunction) {
		try {
			await this.userService.putById(req.params.userId);
		} catch (error) {
			next(error);
		}
	}

	async patchUser(req: Request, res: Response, next: NextFunction) {
		try {
			await this.userService.patchById(req.params.userId);
		} catch (error) {
			next(error);
		}
	}
}
