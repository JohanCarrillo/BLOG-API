import { User } from "@prisma/client";
import { CreateCommentDto } from "../../comment/dto/create.comment.dto";
import { CreatePostDto } from "../../post/dto/create.post.dto";
import { ERole } from "../../utils/enums/role.enum";
export interface CreateUserDto extends User {
	email: string;
	name: string;
	password: string | null;
}
