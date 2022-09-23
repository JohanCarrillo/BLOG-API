import { Application } from "express";

import AbstractRouter from "./utils/abstractRouter";
import { HomeService } from "../service/home.service";

export class HomeRoutes extends AbstractRouter {
	homeService: HomeService;

	constructor(app: Application, name: string, homeService: HomeService) {
		console.log("creating HomeRoutes instance");
		super(app, name);
		this.homeService = homeService;
	}

	configureRoutes(): Application {
		this.app.get("/", this.homeService.getHome);
		return this.app;
	}
}
