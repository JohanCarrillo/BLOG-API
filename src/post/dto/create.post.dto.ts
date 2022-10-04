export interface CreatePostDto {
	id: string;
	title: string;
	content: string;
	summary: string;
	images?: string[];
	published?: boolean;
	author: string;
	created_at: string;
	updated_at: string;
}
