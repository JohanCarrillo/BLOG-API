import { Types } from "mongoose";

export interface IComment {
	post: Types.ObjectId;
	text: string;
	user: Types.ObjectId;
}
