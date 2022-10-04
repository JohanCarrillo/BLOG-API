import { CreateCommentDto } from "./create.comment.dto";

export interface PatchCommentDto extends Partial<CreateCommentDto> {}
