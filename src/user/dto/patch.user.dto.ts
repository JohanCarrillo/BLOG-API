import { Prisma, User } from "@prisma/client";

export interface PatchUserDto extends Omit<Prisma.UserUpdateInput, "role"> {}
