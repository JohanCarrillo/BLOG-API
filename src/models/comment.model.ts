import { model, Schema } from "mongoose";
import { IComment } from "./interfaces/comment.interface";

const commentSchema = new Schema<IComment>(
	{
		post: { type: Schema.Types.ObjectId, ref: "Post" },
		text: { type: String, require: true, minLength: 10, maxLength: 1000 },
		user: { type: Schema.Types.ObjectId, ref: "User", populate: true },
	},
	{ timestamps: true }
);

commentSchema.virtual("url").get(function (): string {
	return "/comments/" + this.id;
});

export default model("Comment", commentSchema, "comments");
