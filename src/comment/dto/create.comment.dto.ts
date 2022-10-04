export interface CreateCommentDto {
	content: string;
	author: string;
	post: string;
	approbed?: boolean;
	created_at: string;
	updated_at: string;
}
