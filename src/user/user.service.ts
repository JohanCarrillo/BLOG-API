import debug from "debug";
import prisma from "../db/prisma/prismaClient";
import { User } from "@prisma/client";
import { CRUD } from "../utils/CRUD.interface";
import { CreateUserDto } from "./dto/create.user.dto";
import { PatchUserDto } from "./dto/patch.user.dto";
import { PutUserDto } from "./dto/put.user.dto";

const debugLog: debug.IDebugger = debug("userService");

export class UserService implements CRUD<User> {
	private static instance: UserService;

	constructor() {
		if (UserService.instance) {
			return UserService.instance;
		}
		UserService.instance = this;
		debugLog("user service created");
	}

	getAll = async (): Promise<User[]> => {
		const users = await prisma.user.findMany({});
		return users;
	};

	getById = async (userId: string): Promise<User | null> => {
		const user = await prisma.user.findUnique({ where: { id: userId } });
		return user;
	};

	getByEmail = async (userEmail: string): Promise<User | null> => {
		const user = await prisma.user.findUnique({ where: { email: userEmail } });
		return user;
	};

	create = async (newUser: CreateUserDto): Promise<User | void> => {
		const user = await prisma.user.create({
			data: {
				email: newUser.email,
				name: newUser.name,
			},
		});
	};

	deleteById = async (userId: string): Promise<User | void> => {};

	putById = async (
		userId: string,
		updateUser: PutUserDto
	): Promise<User | void> => {
		// search user in db and update it
		// return updated user
	};

	patchById = async (
		userId: string,
		updateUserFields: PatchUserDto
	): Promise<User | void> => {
		// search user in db and update it
		// return updated user
	};
}
