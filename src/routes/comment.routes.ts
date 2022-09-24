import { Application } from "express";

import AbstractRouter from "./utils/abstractRouter";
import { CommentService } from "../service/comment.service";

export class CommentRoutes extends AbstractRouter {
	commentService!: CommentService;
	private static instance: CommentRoutes;

	constructor(app: Application, name: string, commentService: CommentService) {
		if (CommentRoutes.instance) {
			return CommentRoutes.instance;
		}
		super(app, name);
		this.commentService = commentService;
		CommentRoutes.instance = this;
	}

	configureRoutes(): Application {
		this.app.get("/comments", this.commentService.getAllComments);
		this.app.get("/comments/:commentId", this.commentService.getComment);
		this.app.post("/comments", this.commentService.createComment);
		this.app.delete("/comments/:commentId", this.commentService.deleteComment);
		this.app.put("/comments/:commentId", this.commentService.updateComment);

		return this.app;
	}
}
