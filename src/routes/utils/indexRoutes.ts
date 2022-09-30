import { Application } from "express";
import { HomeService } from "../../service/home.service";
import { PostService } from "../../service/post.service";
import AbstractRouter from "./abstractRouter";
import { HomeRoutes } from "../home.routes";
import { PostRoutes } from "../post.routes";
import { CommentRoutes } from "../comment.routes";
import { CommentService } from "../../service/comment.service";
import { UserRoutes } from "../user.routes";
import { UserService } from "../../service/user.service";
import { ProtectionService } from "../../service/protection.service";

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
		new UserRoutes(app, "users", new UserService(), new ProtectionService()),
	];

	routes.forEach((route: AbstractRouter): void => {
		route.configureRoutes();
	});
}
