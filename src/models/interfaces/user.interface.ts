export interface IUser {
	name: string;
	email: string;
	password: string;
	profilePhoto?: string;
	source: string;
	lastVisited: Date;
}
