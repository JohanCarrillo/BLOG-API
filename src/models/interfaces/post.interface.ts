import { Types } from "mongoose";

export interface IPost {
	title: string;
	content: string;
	images?: string[];
	summary: string;
	author: Types.ObjectId;
	published: boolean;
}
