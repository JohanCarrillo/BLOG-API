import { NextFunction, Request, Response } from "express";

export class ProtectionMiddleware {
	private static instance: ProtectionMiddleware;

	constructor() {
		if (ProtectionMiddleware.instance) {
			return ProtectionMiddleware.instance;
		}
		ProtectionMiddleware.instance = this;
	}

	private typeOfUser(token: any): string {
		return "";
	}

	private tokenIsValid(req: Request, token?: any) {}

	public userIsLoggedIn(req: Request, res: Response, next: NextFunction) {}

	public isAdmin(req: Request, res: Response, next: NextFunction) {
		// check if user is logged | token is valid
		// check if the request comes from an admin
		console.log("isadmin");
		next();
	}

	public isResourceOwnerOrAdmin(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		// check if user is logged | token is valid
		// check if the request comes from an admin or the user who created the resource
	}
}
