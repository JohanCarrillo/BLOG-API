import { Application } from "express";

import AbstractRouter from "./utils/abstractRouter";
import { PostService } from "../service/post.service";

export class PostRoutes extends AbstractRouter {
	postService: PostService;

	constructor(app: Application, name: string, postService: PostService) {
		super(app, name);
		this.postService = postService;
	}

	configureRoutes(): Application {
		this.app.get("/posts", this.postService.getAllPosts);
		this.app.get("/posts/:postId", this.postService.getPost);
		this.app.post("/posts", this.postService.createPost);
		this.app.delete("/posts/:postId", this.postService.deletePost);
		this.app.put("/posts/:postId", this.postService.updatePost);

		return this.app;
	}
}
