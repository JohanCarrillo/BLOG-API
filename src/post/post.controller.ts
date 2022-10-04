import { NextFunction, Request, Response } from "express";
import { PostService } from "./post.service";

export class PostController {
	private static instance: PostController;
	private postService!: PostService;

	constructor(postService: PostService) {
		if (PostController.instance) {
			return PostController.instance;
		}
		this.postService = postService;
		PostController.instance = this;
	}

	async getAllPosts(req: Request, res: Response, next: NextFunction) {
		try {
			const posts = await this.postService.getAll();
			if (posts == null) res.status(404).json({ msj: "post not found" });
			// handle errors for wrong input and server
		} catch (error) {
			next(error);
		}
	}

	async getPostById(req: Request, res: Response, next: NextFunction) {
		try {
			const post = await this.postService.getById(req.params.postId);
			if (post == null) res.status(404).json({ msj: "post not found" });
			// handle errors for wrong input and server
		} catch (error) {
			next(error);
		}
	}

	async getPostsByAuthorId(req: Request, res: Response, next: NextFunction) {
		try {
			const posts = await this.postService.getByAuthorId(req.params.authorId);
			if (posts == null) res.status(404).json({ msj: "post not found" });
			// handle errors for wrong input and server
		} catch (error) {
			next(error);
		}
	}

	async createPost(req: Request, res: Response, next: NextFunction) {
		try {
			// we have to ensure that the req.body we pass fulfills the dto structure
			const post = await this.postService.create(req.body);
			if (post == null) res.status(404).json({ msj: "post not found" });
		} catch (error) {
			next(error);
		}
	}

	async deletePostById(req: Request, res: Response, next: NextFunction) {
		try {
			const post = await this.postService.deleteById(req.params.postId);
			if (post == null) res.status(404).json({ msj: "post not found" });
		} catch (error) {
			next(error);
		}
	}
	async putPostById(req: Request, res: Response, next: NextFunction) {
		try {
			// we have to ensure that the req.body we pass fulfills the dto structure
			const post = await this.postService.putById(req.params.postId, req.body);
			if (post == null) res.status(404).json({ msj: "post not found" });
			// if req.body !== PostPutDto res.status(401).json({msj: "wrong input"})
		} catch (error) {
			next(error);
		}
	}
	async patchPostById(req: Request, res: Response, next: NextFunction) {
		try {
			// we have to ensure that the req.body we pass fulfills the dto structure
			const post = await this.postService.patchById(
				req.params.postId,
				req.body
			);
			if (post == null) res.status(404).json({ msj: "post not found" });
			// if req.body !== PatchPutDto res.status(401).json({msj: "wrong input"})
		} catch (error) {
			next(error);
		}
	}
}
