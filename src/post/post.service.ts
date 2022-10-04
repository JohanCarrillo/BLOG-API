import { Request, Response } from "express";
import { CRUD } from "src/utils/CRUD.interface";
import { CreatePostDto } from "./dto/create.post.dto";
import { PutPostDto } from "./dto/put.post.dto";
import { PatchPostDto } from "./dto/patch.post.dto";

export class PostService implements CRUD<CreatePostDto> {
	private static instance: PostService;

	constructor() {
		if (PostService.instance) {
			return PostService.instance;
		}
		PostService.instance = this;
	}

	async getAll(): Promise<CreatePostDto[] | void> {
		// search all posts and return them
	}

	async getById(postId: string): Promise<CreatePostDto | void> {
		// search for post in db using id
		// return post
	}

	async getByAuthorId(authorId: string): Promise<CreatePostDto[] | void> {
		// search for post in db using user id
		// return post
	}

	async create(post: CreatePostDto): Promise<CreatePostDto | void> {
		// sanitize post and save it in db
		// return saved post
	}

	async deleteById(postId: string): Promise<CreatePostDto | void> {
		// search post in db and delete it
		// return deleted post
	}

	async putById(
		postId: string,
		updatePost: PutPostDto
	): Promise<CreatePostDto | void> {
		// search post in db and update it
		// return updated post
	}

	async patchById(
		postId: string,
		updatePostFields: PatchPostDto
	): Promise<CreatePostDto | void> {
		// search post in db and update it
		// return updated post
	}
}
