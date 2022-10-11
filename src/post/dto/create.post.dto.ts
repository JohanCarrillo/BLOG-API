import { CreateCommentDto } from "../../comment/dto/create.comment.dto";
import { CreateUserDto } from "../../user/dto/create.user.dto";
import { CreateCategoryDto } from "../../category/dto/create.category.dto";

export interface CreatePostDto {
	id: string;
	title: string;
	content: string;
	summary: string;
	imagesUrl?: {};
	published?: boolean;
	author: CreateUserDto;
	createdAt: Date;
	updatedAt: Date;
	comments?: CreateCommentDto[];
	categories?: CreateCategoryDto[];
}
