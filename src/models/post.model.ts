import { Schema, model } from "mongoose";
import { IPost } from "./interfaces/post.interface";

const postSchema = new Schema<IPost>(
	{
		title: {
			type: String,
			required: [true, "title is required"],
			minLength: 1,
			maxLength: 30,
		},
		content: {
			type: String,
			required: [true, "content is required"],
			minLength: 10,
			maxLength: 1000,
		},
		images: { type: [String], require: false },
		summary: {
			type: String,
			required: [true, "summary is required"],
			minLength: 10,
			maxLength: 100,
		},
		author: { type: Schema.Types.ObjectId, ref: "User", populate: true },
		published: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

postSchema.virtual("url").get(function (): string {
	return "/posts/" + this.id;
});
postSchema.virtual("changePubishedState").set(function (state: boolean): void {
	this.published = state;
});

export default model<IPost>("Post", postSchema, "posts");
