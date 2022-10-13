import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
	// prisma logger
	log: [
		{ level: "warn", emit: "event" },
		{ level: "error", emit: "event" },
		{ level: "query", emit: "event" },
	],
	errorFormat: "pretty",
});

prisma.$on("warn", e => {
	console.warn("Prisma warnning: " + e);
});

prisma.$on("error", e => {
	console.error("Prisma error: " + e);
});

prisma.$on("query", e => {
	console.log("Query: " + e.query);
	console.log("Params: " + e.params);
});
export default prisma;
