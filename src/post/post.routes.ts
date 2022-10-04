import { Application } from "express";

import AbstractRouter from "../utils/abstractRouter";
import { PostController } from "./post.controller";

export class PostRoutes extends AbstractRouter {
	private postController!: PostController;
	private static instance: PostRoutes;

	constructor(app: Application, name: string, postController: PostController) {
		if (PostRoutes.instance) {
			return PostRoutes.instance;
		}
		super(app, name);
		this.postController = postController;
		PostRoutes.instance = this;
	}

	configureRoutes(): Application {
		this.app.get("/posts", this.postController.getAllPosts);

		this.app.get("/posts/:postId", this.postController.getPostById);

		this.app.get("/posts/:authorId", this.postController.getPostsByAuthorId);

		// protected routes
		this.app.post("/posts", this.postController.createPost);

		this.app.delete("/posts/:postId", this.postController.deletePostById);

		this.app.put("/posts/:postId", this.postController.putPostById);

		this.app.patch("/posts/:postId", this.postController.patchPostById);

		return this.app;
	}
}
