import { Application } from "express";

import AbstractRouter from "./utils/abstractRouter";
import { CommentService } from "../service/comment.service";
import { ProtectionService } from "src/service/protection.service";

export class CommentRoutes extends AbstractRouter {
	private commentService!: CommentService;
	private static instance: CommentRoutes;
	private protectionService!: ProtectionService;

	constructor(
		app: Application,
		name: string,
		commentService: CommentService,
		protectionService: ProtectionService
	) {
		if (CommentRoutes.instance) {
			return CommentRoutes.instance;
		}
		super(app, name);
		this.protectionService = protectionService;
		this.commentService = commentService;
		CommentRoutes.instance = this;
	}

	configureRoutes(): Application {
		// get all comments ? from a post
		this.app.get("/comments", this.commentService.getAllComments);

		// protected routes
		this.app.get(
			"/comments/:commentId",
			this.protectionService.isResourceOwnerOrAdmin,
			this.commentService.getComment
		);

		this.app.post(
			"/comments",
			this.protectionService.userIsLoggedIn,
			this.commentService.createComment
		);

		this.app.delete(
			"/comments/:commentId",
			this.protectionService.isResourceOwnerOrAdmin,
			this.commentService.deleteComment
		);

		this.app.put(
			"/comments/:commentId",
			this.protectionService.isResourceOwnerOrAdmin,
			this.commentService.updateComment
		);

		return this.app;
	}
}
