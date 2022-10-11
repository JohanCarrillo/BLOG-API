import { CreateCommentDto } from "../../comment/dto/create.comment.dto";
import { CreatePostDto } from "../../post/dto/create.post.dto";
import { ERole } from "../../utils/enums/role.enum";
export interface CreateUserDto {
	id: string;
	email: string;
	name: string;
	password?: string;
	role?: ERole;
	posts?: CreatePostDto[];
	comments?: CreateCommentDto;
}
