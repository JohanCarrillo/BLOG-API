import { CreatePostDto } from "./create.post.dto";

export interface PatchPostDto extends Partial<CreatePostDto> {}
