import { Application, NextFunction, Request, Response } from "express";
import { type } from "os";

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

	// add routes to the app
	abstract configureRoutes(): Application;
}
