import { NextFunction, Request, Response } from "express";
import { CreateUserDto } from "./dto/create.user.dto";
import { PatchUserDto } from "./dto/patch.user.dto";
import { PutUserDto } from "./dto/put.user.dto";
import { CRUD } from "../utils/CRUD.interface";

export class UserService implements CRUD<CreateUserDto> {
	private static instance: UserService;

	constructor() {
		if (UserService.instance) {
			return UserService.instance;
		}
		UserService.instance = this;
	}

	async getAll(): Promise<CreateUserDto[] | void> {
		// search all users and return them
	}

	async getById(userId: string): Promise<CreateUserDto | void> {
		// search for user in db using id
		// return user
	}

	async getByEmail(userEmail: string): Promise<CreateUserDto | void> {
		// search for user in db using email
		// return user
	}

	async create(user: CreateUserDto): Promise<CreateUserDto | void> {
		// sanitize user and save it in db
		// return saved user
	}

	async deleteById(userId: string): Promise<CreateUserDto | void> {
		// search user in db and delete it
		// return deleted user
	}

	async putById(
		userId: string,
		updateUser: PutUserDto
	): Promise<CreateUserDto | void> {
		// search user in db and update it
		// return updated user
	}

	async patchById(
		userId: string,
		updateUserFields: PatchUserDto
	): Promise<CreateUserDto | void> {
		// search user in db and update it
		// return updated user
	}
}
