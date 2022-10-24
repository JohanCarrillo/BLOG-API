import { Prisma, User } from "@prisma/client";

// export interface PutUserDto extends Required<Omit<User, "role">> {}
export interface PutUserDto extends Required<Prisma.UserCreateInput> {}
