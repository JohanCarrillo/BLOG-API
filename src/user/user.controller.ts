import debug from "debug";

import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";
import ErrorMessages from "../utils/enums/errorMessages.enum";
import ResponseMessages from "../utils/enums/responseMessages.enum";

const debugLog: debug.IDebugger = debug("userController");

export class UserController {
	private static instance: UserController;
	private userService: UserService;

	constructor(userService: UserService) {
		if (UserController.instance) {
			return UserController.instance;
		}
		this.userService = userService;
		UserController.instance = this;
		debugLog("user controller created");
	}

	createUser = async (req: Request, res: Response, next: NextFunction) => {
		try {
			// we have to ensure that the req.body we pass fulfills the dto structure
			const user = await this.userService.create(req.body);
			res.status(201).json(user);
			// handle errors for wrong input and server
		} catch (error) {
			next(error);
		}
	};

	getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const users = await this.userService.getAll();
			if (users.length === 0) {
				res.status(200).json({ message: ResponseMessages.emptyResource });
			}
			res.status(200).json(users);
		} catch (error) {
			next(error);
		}
	};

	getUserById = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const user = await this.userService.getById(req.params.userId);
			if (user == null) {
				res.status(404).json({ error: ErrorMessages.error404 });
			}
			res.status(200).json(user);
		} catch (error) {
			next(error);
		}
	};

	getUserByEmail = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const user = await this.userService.getByEmail(req.params.userEmail);
			if (user == null) {
				res.status(404).json({ error: ErrorMessages.error404 });
			}
			res.status(200).json(user);
		} catch (error) {
			next(error);
		}
	};

	deleteUser = async (req: Request, res: Response, next: NextFunction) => {
		try {
			// check number of posts and comments
			const user = await this.userService.deleteById(req.params.userId);
			if (user == null) {
				res.status(404).json({ error: ErrorMessages.error404 });
			}
			res.status(200).json(user);
		} catch (error) {
			next(error);
		}
	};

	putUser = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const user = await this.userService.putById(req.params.userId, req.body);
			if (user == null) {
				res.status(404).json({ error: ErrorMessages.error404 });
			}
			res.status(200).json(user);
		} catch (error) {
			next(error);
		}
	};

	patchUser = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const user = await this.userService.patchById(
				req.params.userId,
				req.body
			);
			if (user == null) {
				res.status(404).json({ error: ErrorMessages.error404 });
			}
			res.status(200).json(user);
		} catch (error) {
			next(error);
		}
	};
}
