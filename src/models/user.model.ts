import { model, Schema } from "mongoose";
import { IUser } from "./interfaces/user.interface";

const userSchema = new Schema<IUser>({
	name: {
		type: String,
		required: [true, "name is required"],
		minLength: 1,
		maxLength: 30,
	},
	email: {
		type: String,
		required: [true, "email is required"],
		minLength: 1,
		maxLength: 30,
		lowercase: true,
		unique: true,
	},
	password: {
		type: String,
		required: [true, "password is required"],
		minLength: 1,
		maxLength: 30,
	},
	profilePhoto: { type: String, require: false },
	source: { type: String, required: [true, "source not specified"] },
	lastVisited: { type: Date, default: new Date() },
});

export default model<IUser>("User", userSchema, "users");
