import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import Ajv2019, { JSONSchemaType } from "ajv/dist/2019";

import { CreateUserDto } from "src/user/dto/create.user.dto";
const ajv = new Ajv2019();

const schema: JSONSchemaType<CreateUserDto> = {
	type: "object",
	required: ["email", "name"],
	properties: {
		email: { type: "string" },
		name: { type: "string" },
		password: { type: "string", nullable: true, minLength: 10 },
	},
	additionalProperties: false,
};

const validate = ajv.compile(schema);

const userCreateValidator = [
	body("name").isAlphanumeric().trim().isLength({ min: 4 }).unescape(),
	body("email").trim().isEmail().normalizeEmail().isLength({ min: 1 }),
	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		if (!validate(req.body)) {
			return res.status(400).json({ errors: validate.errors });
		}
		next();
	},
];

export default userCreateValidator;
