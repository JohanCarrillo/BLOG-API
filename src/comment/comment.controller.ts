import { NextFunction, Request, Response } from "express";
import { CommentService } from "./comment.service";

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

	async getAllComments(req: Request, res: Response, next: NextFunction) {
		try {
			const comments = await this.commentService.getAll();
			if (comments == null) res.status(404).json({ msj: "comment not found" });
			// handle errors for wrong input and server
		} catch (error) {
			next(error);
		}
	}

	async getCommentById(req: Request, res: Response, next: NextFunction) {
		try {
			const comment = await this.commentService.getById(req.params.commentId);
			if (comment == null) res.status(404).json({ msj: "comment not found" });
			// handle errors for wrong input and server
		} catch (error) {
			next(error);
		}
	}
	async getCommentsByPostId(req: Request, res: Response, next: NextFunction) {
		try {
			// if (post == null) res.status(404).json({ msj: "comment not found" });
			const comments = await this.commentService.getByPostId(req.params.postId);
			if (comments == null) res.status(404).json({ msj: "comment not found" });
			// handle errors for wrong input and server
		} catch (error) {
			next(error);
		}
	}
	async getCommentsByAuthorId(req: Request, res: Response, next: NextFunction) {
		try {
			// if (author == null) res.status(404).json({ msj: "comment not found" });
			const comments = await this.commentService.getByAuthorId(
				req.params.authorId
			);
			if (comments == null) res.status(404).json({ msj: "comment not found" });
			// handle errors for wrong input and server
		} catch (error) {
			next(error);
		}
	}

	async createComment(req: Request, res: Response, next: NextFunction) {
		try {
			// we have to make sure that the req.body fulfills the dto
			const comment = await this.commentService.create(req.body);
			if (comment == null) res.status(404).json({ msj: "comment not found" });
			// handle errors for wrong input and server
		} catch (error) {
			next(error);
		}
	}

	async deleteCommentById(req: Request, res: Response, next: NextFunction) {
		try {
			const comment = await this.commentService.deleteById(req.params.id);
			if (comment == null) res.status(404).json({ msj: "comment not found" });
			// handle errors for wrong input and server
		} catch (error) {
			next(error);
		}
	}

	async putCommentById(req: Request, res: Response, next: NextFunction) {
		try {
			// we have to make sure that the req.body fulfills the dto
			const comment = await this.commentService.putById(
				req.params.id,
				req.body
			);
			if (comment == null) res.status(404).json({ msj: "comment not found" });
			// handle errors for wrong input and server
			// if(req.body !== PutCommentDto) res.status(400).json({msj: "wrong body"})
		} catch (error) {
			next(error);
		}
	}

	async patchCommentById(req: Request, res: Response, next: NextFunction) {
		try {
			// we have to make sure that the req.body fulfills the dto
			const comment = await this.commentService.patchById(
				req.params.id,
				req.body
			);
			if (comment == null) res.status(404).json({ msj: "comment not found" });
			// handle errors for wrong input and server
			// if(req.body !== PatchCommentDto) res.status(400).json({msj: "wrong body"})
		} catch (error) {
			next(error);
		}
	}
}
