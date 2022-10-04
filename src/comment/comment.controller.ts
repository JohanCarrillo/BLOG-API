import { NextFunction, Request, Response } from "express";
import { CommentService } from "./comment.service";
import ErrorMessages from "../utils/errorMessages.enum";

export class CommentController {
	private static instance: CommentController;
	private commentService!: CommentService;

	constructor(commentService: CommentService) {
		if (CommentController.instance) {
			return CommentController.instance;
		}
		this.commentService = commentService;
		CommentController.instance = this;
	}

	getAllComments = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const comments = await this.commentService.getAll();
			if (comments == null)
				res.status(404).json({ error: ErrorMessages.error404 });
			res.status(200).json(comments);
			// handle errors for wrong input and server
		} catch (error) {
			next(error);
		}
	};

	getCommentById = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const comment = await this.commentService.getById(req.params.commentId);
			if (comment == null) {
				res.status(404).json({ error: ErrorMessages.error404 });
			}
			res.status(200).json(comment);
			// handle errors for wrong input and server
		} catch (error) {
			next(error);
		}
	};
	getCommentsByPostId = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		try {
			// if (post == null) res.status(404).json({ error: ErrorMessages.error404 });
			const comments = await this.commentService.getByPostId(req.params.postId);
			if (comments == null) {
				res.status(404).json({ error: ErrorMessages.error404 });
			}
			res.status(200).json(comments);
			// handle errors for wrong input and server
		} catch (error) {
			next(error);
		}
	};
	getCommentsByAuthorId = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		try {
			// if (author == null) res.status(404).json({ error: ErrorMessages.error404 });
			const comments = await this.commentService.getByAuthorId(
				req.params.authorId
			);
			if (comments == null) {
				res.status(404).json({ error: ErrorMessages.error404 });
			}
			res.status(200).json(comments);
			// handle errors for wrong input and server
		} catch (error) {
			next(error);
		}
	};

	createComment = async (req: Request, res: Response, next: NextFunction) => {
		try {
			// we have to make sure that the req.body fulfills the dto
			const comment = await this.commentService.create(req.body);
			if (comment == null) {
				res.status(404).json({ error: ErrorMessages.error404 });
			}
			res.status(201).json(comment);
			// handle errors for wrong input and server
		} catch (error) {
			next(error);
		}
	};

	deleteCommentById = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		try {
			const comment = await this.commentService.deleteById(req.params.id);
			if (comment == null) {
				res.status(404).json({ error: ErrorMessages.error404 });
			}
			res.status(200).json(comment);
			// handle errors for wrong input and server
		} catch (error) {
			next(error);
		}
	};

	putCommentById = async (req: Request, res: Response, next: NextFunction) => {
		try {
			// we have to make sure that the req.body fulfills the dto
			const comment = await this.commentService.putById(
				req.params.id,
				req.body
			);
			if (comment == null) {
				res.status(404).json({ error: ErrorMessages.error404 });
			}
			res.status(200).json(comment);
			// handle errors for wrong input and server
			// if(req.body !== PutCommentDto) res.status(400).json({error: ErrorMessages.error404y"})
		} catch (error) {
			next(error);
		}
	};

	patchCommentById = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		try {
			// we have to make sure that the req.body fulfills the dto
			const comment = await this.commentService.patchById(
				req.params.id,
				req.body
			);
			if (comment == null) {
				res.status(404).json({ error: ErrorMessages.error404 });
			}
			res.status(200).json(comment);
			// handle errors for wrong input and server
			// if(req.body !== PatchCommentDto) res.status(400).json({error: ErrorMessages.error404y"})
		} catch (error) {
			next(error);
		}
	};
}
