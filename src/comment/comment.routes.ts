import { Application } from "express";

import AbstractRouter from "../utils/abstractRouter";
import { CommentController } from "./comment.controller";

export class CommentRoutes extends AbstractRouter {
	private commentController!: CommentController;
	private static instance: CommentRoutes;

	constructor(
		app: Application,
		name: string,
		commentController: CommentController
	) {
		if (CommentRoutes.instance) {
			return CommentRoutes.instance;
		}
		super(app, name);
		this.commentController = commentController;
		CommentRoutes.instance = this;
	}

	configureRoutes(): Application {
		// get all comments
		this.app.get("/comments", this.commentController.getAllComments);

		this.app.get(
			"/comments/:authorId",
			this.commentController.getCommentsByAuthorId
		);

		this.app.get(
			"/comments/:postId",
			this.commentController.getCommentsByPostId
		);

		// protected routes
		this.app.get("/comments/:commentId", this.commentController.getCommentById);

		this.app.post("/comments", this.commentController.createComment);

		this.app.delete(
			"/comments/:commentId",
			this.commentController.deleteCommentById
		);

		this.app.put("/comments/:commentId", this.commentController.putCommentById);

		this.app.patch(
			"/comments/:commentId",
			this.commentController.patchCommentById
		);

		return this.app;
	}
}
