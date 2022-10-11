import { CreatePostDto } from "../../post/dto/create.post.dto";

export interface CreateCategoryDto {
	id: string;
	name: string;
	posts?: CreatePostDto[];
}
