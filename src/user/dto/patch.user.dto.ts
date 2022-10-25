import { Prisma, User } from "@prisma/client";

export interface PatchUserDto extends Prisma.UserUpdateInput {}
