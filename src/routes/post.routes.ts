import { Application } from "express";

import AbstractRouter from "../utils/abstractRouter";
import { PostService } from "../service/post.service";
import { ProtectionService } from "../service/protection.service";

export class PostRoutes extends AbstractRouter {
	private postService!: PostService;
	private static instance: PostRoutes;
	private protectionService!: ProtectionService;

	constructor(
		app: Application,
		name: string,
		postService: PostService,
		protectionService: ProtectionService
	) {
		if (PostRoutes.instance) {
			return PostRoutes.instance;
		}
		super(app, name);
		this.protectionService = protectionService;
		this.postService = postService;
		PostRoutes.instance = this;
	}

	configureRoutes(): Application {
		this.app.get("/posts", this.postService.getAllPosts);
		this.app.get("/posts/:postId", this.postService.getPost);

		// protected routes
		this.app.post(
			"/posts",
			this.protectionService.isAdmin,
			this.postService.createPost
		);

		this.app.delete(
			"/posts/:postId",
			this.protectionService.isAdmin,
			this.postService.deletePost
		);

		this.app.put(
			"/posts/:postId",
			this.protectionService.isAdmin,
			this.postService.updatePost
		);

		return this.app;
	}
}
