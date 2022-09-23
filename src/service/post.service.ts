import { Request, Response } from "express";

export class PostService {
	private static instance: PostService;

	constructor() {
		if (PostService.instance) {
			return PostService.instance;
		}
		PostService.instance = this;
	}

	getAllPosts(req: Request, res: Response): Response {
		return res.status(200).json({ message: "Posts page in contruction" });
	}

	getPost(req: Request, res: Response): Response {
		return res.status(200).json({ message: "Posts page in contruction" });
	}

	createPost(req: Request, res: Response): Response {
		return res.status(200).json({ message: "Posts page in contruction" });
	}

	deletePost(req: Request, res: Response): Response {
		return res.status(200).json({ message: "Posts page in contruction" });
	}
	updatePost(req: Request, res: Response): Response {
		return res.status(200).json({ message: "Posts page in contruction" });
	}
}