import { Application } from "express";

import AbstractRouter from "./utils/abstractRouter";
import { UserService } from "../service/user.service";
import { ProtectionService } from "src/service/protection.service";

export class UserRoutes extends AbstractRouter {
	private userService!: UserService;
	private static instance: UserRoutes;
	private protectionService!: ProtectionService;

	constructor(
		app: Application,
		name: string,
		userService: UserService,
		protectionService: ProtectionService
	) {
		if (UserRoutes.instance) {
			return UserRoutes.instance;
		}
		super(app, name);
		this.userService = userService;
		UserRoutes.instance = this;
		this.protectionService = this.protectionService;
	}

	configureRoutes(): Application {
		this.app.post("/users", this.userService.createUser);

		// protected routes
		this.app.get(
			"/users",
			this.protectionService.isAdmin,
			this.userService.getAllUsers
		);

		this.app.get(
			"/users/:userId",
			this.protectionService.isResourceOwnerOrAdmin,
			this.userService.getUser
		);

		this.app.delete(
			"/users/:userId",
			this.protectionService.isResourceOwnerOrAdmin,
			this.userService.deleteUser
		);

		this.app.put(
			"/users/:userId",
			this.protectionService.isResourceOwnerOrAdmin,
			this.userService.updateUser
		);

		return this.app;
	}
}
