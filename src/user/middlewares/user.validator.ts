import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const userValidator = [
	body("email").isEmail(),
	body("name").isLength({ min: 4, max: 10 }),
	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	},
];

export default userValidator;
