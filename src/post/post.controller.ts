import { NextFunction, Request, Response } from "express";
import ErrorMessages from "../utils/errorMessages.enum";
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

	getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const posts = await this.postService.getAll();
			if (posts == null) {
				res.status(404).json({ error: ErrorMessages.error404 });
			}
			res.status(200).json(posts);
			// handle errors for wrong input and server
		} catch (error) {
			next(error);
		}
	};

	getPostById = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const post = await this.postService.getById(req.params.postId);
			if (post == null) {
				res.status(404).json({ error: ErrorMessages.error404 });
			}
			res.status(200).json(post);
			// handle errors for wrong input and server
		} catch (error) {
			next(error);
		}
	};

	getPostsByAuthorId = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		try {
			const posts = await this.postService.getByAuthorId(req.params.authorId);
			if (posts == null) {
				res.status(404).json({ error: ErrorMessages.error404 });
			}
			res.status(200).json(posts);
			// handle errors for wrong input and server
		} catch (error) {
			next(error);
		}
	};

	createPost = async (req: Request, res: Response, next: NextFunction) => {
		try {
			// we have to ensure that the req.body we pass fulfills the dto structure
			const post = await this.postService.create(req.body);
			if (post == null) {
				res.status(404).json({ error: ErrorMessages.error404 });
			}
			res.status(201).json(post);
		} catch (error) {
			next(error);
		}
	};

	deletePostById = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const post = await this.postService.deleteById(req.params.postId);
			if (post == null) {
				res.status(404).json({ error: ErrorMessages.error404 });
			}
			res.status(200).json(post);
		} catch (error) {
			next(error);
		}
	};

	putPostById = async (req: Request, res: Response, next: NextFunction) => {
		try {
			// we have to ensure that the req.body we pass fulfills the dto structure
			const post = await this.postService.putById(req.params.postId, req.body);
			if (post == null) {
				res.status(404).json({ error: ErrorMessages.error404 });
			}
			res.status(200).json(post);
			// if req.body !== PostPutDto res.status(401).json({error: "wrong input"})
		} catch (error) {
			next(error);
		}
	};

	patchPostById = async (req: Request, res: Response, next: NextFunction) => {
		try {
			// we have to ensure that the req.body we pass fulfills the dto structure
			const post = await this.postService.patchById(
				req.params.postId,
				req.body
			);
			if (post == null) {
				res.status(404).json({ error: ErrorMessages.error404 });
			}
			res.status(200).json(post);
			// if req.body !== PatchPutDto res.status(401).json({error: "wrong input"})
		} catch (error) {
			next(error);
		}
	};
}
