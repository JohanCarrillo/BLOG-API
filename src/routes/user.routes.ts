import { Application } from "express";

import AbstractRouter from "./utils/abstractRouter";
import { UserService } from "../service/user.service";

export class UserRoutes extends AbstractRouter {
	userService!: UserService;
	private static instance: UserRoutes;

	constructor(app: Application, name: string, userService: UserService) {
		if (UserRoutes.instance) {
			return UserRoutes.instance;
		}
		super(app, name);
		this.userService = userService;
		UserRoutes.instance = this;
	}

	configureRoutes(): Application {
		this.app.get("/users", this.userService.getAllUsers);
		this.app.get("/users/:userId", this.userService.getUser);
		this.app.post("/users", this.userService.createUser);
		this.app.delete("/users/:userId", this.userService.deleteUser);
		this.app.put("/users/:userId", this.userService.updateUser);

		return this.app;
	}
}
