import { Request, Response } from "express";

export class CommentService {
	private static instance: CommentService;

	constructor() {
		if (CommentService.instance) {
			return CommentService.instance;
		}
		CommentService.instance = this;
	}

	getAllComments(req: Request, res: Response): Response {
		return res.status(200).json({ message: "Comments page in contruction" });
	}

	getComment(req: Request, res: Response): Response {
		return res.status(200).json({ message: "Comments page in contruction" });
	}

	createComment(req: Request, res: Response): Response {
		return res.status(200).json({ message: "Comments page in contruction" });
	}

	deleteComment(req: Request, res: Response): Response {
		return res.status(200).json({ message: "Comments page in contruction" });
	}
	updateComment(req: Request, res: Response): Response {
		return res.status(200).json({ message: "Comments page in contruction" });
	}
}
