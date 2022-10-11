export interface CreateCommentDto {
	id: string;
	content: string;
	author: string;
	post: string;
	approbed?: boolean;
	createdAt: string;
	updatedAt?: string;
}
