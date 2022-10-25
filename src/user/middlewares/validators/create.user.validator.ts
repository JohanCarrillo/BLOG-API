import { NextFunction, Request, Response } from "express";
import { body, CustomValidator, validationResult } from "express-validator";

const validatePassword: CustomValidator = password => {
	if (password != "null") {
		if (password.length < 10) {
			return Promise.reject("Password must be at least 10 characters");
		}
	}
};

const userCreateValidator = [
	body("name").isAlphanumeric().trim().isLength({ min: 5 }).unescape(),
	body("email").trim().isEmail().normalizeEmail().isLength({ min: 1 }),
	body("password").custom(validatePassword),
	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	},
];

export default userCreateValidator;
