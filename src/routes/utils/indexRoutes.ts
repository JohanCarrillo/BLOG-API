import { Application } from "express";
import { HomeService } from "../../service/home.service";
import { PostService } from "../../service/post.service";
import AbstractRouter from "./abstractRouter";
import { HomeRoutes } from "../home.routes";
import { PostRoutes } from "../post.routes";
import { CommentRoutes } from "../comment.routes";
import { CommentService } from "src/service/comment.service";
import { UserRoutes } from "../user.routes";
import { UserService } from "src/service/user.service";

export default function bindRoutes(app: Application) {
	const routes = [
		new HomeRoutes(app, "home", new HomeService()),
		new PostRoutes(app, "posts", new PostService()),
		new CommentRoutes(app, "comments", new CommentService()),
		new UserRoutes(app, "users", new UserService()),
	];

	routes.forEach((route: AbstractRouter): void => {
		route.configureRoutes();
	});
}
