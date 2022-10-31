import { Prisma } from "@prisma/client";

export interface CreateUserDto
	extends Omit<
		Prisma.UserCreateInput,
		"id" | "role" | "posts" | "comments" | "source"
	> {}
