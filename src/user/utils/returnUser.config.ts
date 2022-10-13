import { Prisma } from "@prisma/client";

const returnUserConfig: Prisma.UserSelect = {
	id: true,
	email: true,
	name: true,
	role: true,
	_count: {
		select: { posts: true, comments: true },
	},
	posts: {
		select: {
			id: true,
			title: true,
			summary: true,
			createdAt: true,
		},
	},
	comments: {
		select: {
			id: true,
			content: true,
			createdAt: true,
			post: {
				select: {
					id: true,
					title: true,
				},
			},
		},
	},
};

export default returnUserConfig;
