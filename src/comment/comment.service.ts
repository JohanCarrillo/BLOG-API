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

	getAll = async (): Promise<CreateCommentDto[] | void> => {
		// search all comments and return them
	};

	getById = async (commentId: string): Promise<CreateCommentDto | void> => {
		// search for comment in db using id
		// return comment
	};

	getByPostId = async (postId: string): Promise<CreateCommentDto[] | void> => {
		// search for comments in db using post id
		// return comments array
	};

	getByAuthorId = async (
		authorId: string
	): Promise<CreateCommentDto[] | void> => {
		// search for comments in db using user id
		// return comments array
	};

	create = async (
		comment: CreateCommentDto
	): Promise<CreateCommentDto | void> => {
		// sanitize comment and save it in db
		// return saved comment
	};

	deleteById = async (commentId: string): Promise<CreateCommentDto | void> => {
		// search comment in db and delete it
		// return deleted comment
	};

	putById = async (
		commentId: string,
		updateComment: PutCommentDto
	): Promise<CreateCommentDto | void> => {
		// search comment in db and update it
		// return updated comment
	};

	patchById = async (
		commentId: string,
		updateCommentFields: PatchCommentDto
	): Promise<CreateCommentDto | void> => {
		// search comment in db and update it
		// return updated comment
	};
}
