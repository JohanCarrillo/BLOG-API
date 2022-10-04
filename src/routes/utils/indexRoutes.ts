import { Application } from "express";
import { HomeService } from "../../service/home.service";
import { PostService } from "../../post/post.service";
import AbstractRouter from "../../utils/abstractRouter";
import { HomeRoutes } from "../home.routes";
import { PostRoutes } from "../../post/post.routes";
import { CommentRoutes } from "../comment.routes";
import { CommentService } from "../../service/comment.service";
import { UserRoutes } from "../../user/user.routes";
import { UserService } from "../../user/user.service";
import { ProtectionService } from "../../service/protection.service";
import { debug } from "debug";

const debugLog: debug.IDebugger = debug("indexRouter");

export default function bindRoutes(app: Application) {
	const routes = [
		new HomeRoutes(app, "home", new HomeService()),
		new PostRoutes(app, "posts", new PostService(), new ProtectionService()),
		new CommentRoutes(
			app,
			"comments",
			new CommentService(),
			new ProtectionService()
		),
		new UserRoutes(app, "users", new UserService()),
	];

	routes.forEach((route: AbstractRouter): void => {
		route.configureRoutes();
		debugLog(`Routes configured for ${route.getName()}`);
	});
}
