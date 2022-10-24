import debug from "debug";
import prisma from "../db/prisma/prismaClient";
import { Prisma, User } from "@prisma/client";
import { CRUD } from "../utils/CRUD.interface";
import { CreateUserDto } from "./dto/create.user.dto";
import { PatchUserDto } from "./dto/patch.user.dto";
import { PutUserDto } from "./dto/put.user.dto";
import returnUserConfig from "./utils/returnUser.config";

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

	getAll = async (): Promise<Partial<User>[]> => {
		const users = await prisma.user.findMany({ select: returnUserConfig });
		return users;
	};

	getById = async (userId: string): Promise<Partial<User> | null> => {
		const user = await prisma.user.findUnique({
			where: { id: userId },
			select: returnUserConfig,
		});
		return user;
	};

	getByEmail = async (userEmail: string): Promise<Partial<User> | null> => {
		const user = await prisma.user.findUnique({
			where: { email: userEmail },
			select: returnUserConfig,
		});
		return user;
	};

	create = async (newUser: CreateUserDto): Promise<Partial<User>> => {
		const user = await prisma.user.create({
			data: {
				email: newUser.email,
				name: newUser.name,
				password: newUser.password || null, // newUser.password === undefined -> password = null
			},
			select: {
				email: true,
				name: true,
				role: true,
			},
		});
		return user;
	};

	deleteById = async (userId: string): Promise<Partial<User>> => {
		const user = await prisma.user.delete({
			where: { id: userId },
			select: returnUserConfig,
		});
		return user;
	};

	putById = async (
		userId: string,
		updateUser: PutUserDto
	): Promise<Partial<User>> => {
		const user = this.getById(userId);
		if (user == null) {
			return user;
		}

		const updatedUser = prisma.user.update({
			where: { id: userId },
			data: {
				...user,
				...updateUser,
			},
			select: returnUserConfig,
		});
		return updatedUser;
	};

	patchById = async (
		userId: string,
		updateUserFields: PatchUserDto
	): Promise<Partial<User>> => {
		const user = this.getById(userId);
		if (user == null) {
			return user;
		}

		const updatedUser = prisma.user.update({
			where: { id: userId },
			data: { ...updateUserFields },
			select: returnUserConfig,
		});
		return updatedUser;
	};

	changeMemberToAdmin = async () => {};
}
