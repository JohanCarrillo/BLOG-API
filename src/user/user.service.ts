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
		try {
			// return all users
		} catch (error) {}
	}

	async getById(userId: string): Promise<CreateUserDto | void> {
		try {
			// search for user in db
			// return user
		} catch (error) {}
	}

	async getByEmail(userEmail: string): Promise<CreateUserDto | void> {
		try {
			// search for user in db
			// return user
		} catch (error) {}
	}

	async create(user: CreateUserDto): Promise<CreateUserDto | void> {
		try {
			// sanitize user and save in db
			// return user
		} catch (error) {}
	}

	async deleteById(userId: string): Promise<void> {
		try {
			// search user in db and delete
		} catch (error) {}
	}

	async putById(userId: string): Promise<CreateUserDto | void> {
		try {
			// search user in db and update
		} catch (error) {}
	}

	async patchById(userId: string): Promise<CreateUserDto | void> {
		try {
			// search user in db and update
		} catch (error) {}
	}
}
