import { Application, Router } from "express";

export default abstract class AbstractRoutes {
	app: Application;
	private name: string;

	constructor(app: Application, name: string) {
		this.app = app;
		this.name = name;
	}

	getName() {
		return this.name;
	}

	abstract configureRoutes(): Application;
}
