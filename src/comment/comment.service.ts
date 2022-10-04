import { Request, Response } from "express";
import { CRUD } from "src/utils/CRUD.interface";
import { CreateCommentDto } from "./dto/create.comment.dto";
import { PutCommentDto } from "./dto/put.comment.dto";
import { PatchCommentDto } from "./dto/patch.comment.dto";

export class CommentService implements CRUD<CreateCommentDto> {
	private static instance: CommentService;

	constructor() {
		if (CommentService.instance) {
			return CommentService.instance;
		}
		CommentService.instance = this;
	}

	async getAll(): Promise<CreateCommentDto[] | void> {
		// search all comments and return them
	}

	async getById(commentId: string): Promise<CreateCommentDto | void> {
		// search for comment in db using id
		// return comment
	}

	async getByPostId(postId: string): Promise<CreateCommentDto[] | void> {
		// search for comments in db using post id
		// return comments array
	}

	async getByAuthorId(authorId: string): Promise<CreateCommentDto[] | void> {
		// search for comments in db using user id
		// return comments array
	}

	async create(comment: CreateCommentDto): Promise<CreateCommentDto | void> {
		// sanitize comment and save it in db
		// return saved comment
	}

	async deleteById(commentId: string): Promise<CreateCommentDto | void> {
		// search comment in db and delete it
		// return deleted comment
	}

	async putById(
		commentId: string,
		updateComment: PutCommentDto
	): Promise<CreateCommentDto | void> {
		// search comment in db and update it
		// return updated comment
	}

	async patchById(
		commentId: string,
		updateCommentFields: PatchCommentDto
	): Promise<CreateCommentDto | void> {
		// search comment in db and update it
		// return updated comment
	}
}
