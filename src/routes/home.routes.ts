import { Application } from "express";

import AbstractRouter from "./utils/abstractRouter";
import { HomeService } from "../service/home.service";

export class HomeRoutes extends AbstractRouter {
	homeService!: HomeService;
	private static instance: HomeRoutes;

	constructor(app: Application, name: string, homeService: HomeService) {
		if (HomeRoutes.instance) {
			return HomeRoutes.instance;
		}
		super(app, name);
		this.homeService = homeService;
		HomeRoutes.instance = this;
	}

	configureRoutes(): Application {
		this.app.get("/", this.homeService.getHome);
		return this.app;
	}
}
