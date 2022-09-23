import { Application } from "express";
import { HomeService } from "../../service/home.service";
import { PostService } from "../../service/post.service";
import AbstractRouter from "./abstractRouter";
import { HomeRoutes } from "../home.routes";
import { PostRoutes } from "../post.routes";

export default function bindRoutes(app: Application) {
	const routes = [
		new HomeRoutes(app, "home", new HomeService()),
		new PostRoutes(app, "posts", new PostService()),
	];

	routes.forEach((route: AbstractRouter): void => {
		route.configureRoutes();
	});
}
