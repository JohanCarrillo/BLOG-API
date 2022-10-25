import { Application } from "express";

import AbstractRouter from "../utils/abstractRouter";
import { UserController } from "./user.controller";
import userCreateValidator from "./middlewares/validators/create.user.validator";
import userPutValidator from "./middlewares/validators/put.user.validator";

export class UserRoutes extends AbstractRouter {
	private userController!: UserController;
	private static instance: UserRoutes;

	constructor(app: Application, name: string, userController: UserController) {
		if (UserRoutes.instance) {
			return UserRoutes.instance;
		}
		super(app, name);
		this.userController = userController;
		UserRoutes.instance = this;
	}

	configureRoutes = (): Application => {
		this.app.post(
			"/users",
			userCreateValidator,
			this.userController.createUser
		); // ADMIN only

		// protected routes
		this.app.get("/users", this.userController.getAllUsers);

		this.app.get("/users/:userId", this.userController.getUserById);

		this.app.get("/users/:userEmail", this.userController.getUserByEmail);

		this.app.delete("/users/:userId", this.userController.deleteUser);

		this.app.put(
			"/users/:userId",
			userPutValidator,
			this.userController.putUser
		);

		this.app.patch("/users/:userId", this.userController.patchUser);

		return this.app;
	};
}
