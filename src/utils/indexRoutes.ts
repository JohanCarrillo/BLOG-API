import { debug } from "debug";
import { Application } from "express";
import { PostController } from "../post/post.controller";
import AbstractRouter from "./abstractRouter";
import { PostRoutes } from "../post/post.routes";
import { CommentRoutes } from "../comment/comment.routes";
import { CommentController } from "../comment/comment.controller";
import { UserRoutes } from "../user/user.routes";
import { UserController } from "../user/user.controller";
import { PostService } from "../post/post.service";
import { CommentService } from "../comment/comment.service";
import { UserService } from "../user/user.service";

const debugLog: debug.IDebugger = debug("indexRouter");

export default function bindRoutes(app: Application) {
	const routes = [
		new PostRoutes(app, "posts", new PostController(new PostService())),
		new CommentRoutes(
			app,
			"comments",
			new CommentController(new CommentService())
		),
		new UserRoutes(app, "users", new UserController(new UserService())),
	];

	routes.forEach((route: AbstractRouter): void => {
		route.configureRoutes();
		debugLog(`Routes configured for ${route.getName()}`);
	});
}
