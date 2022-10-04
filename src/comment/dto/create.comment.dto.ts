export interface CreateCommentDto {
	content: string;
	timeStamp: Date;
	author: string;
	post: string;
	approbed?: boolean;
}
