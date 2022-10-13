export interface CRUD<T> {
	getAll(): Promise<T[]>;
	getById(id: string): Promise<T | null>;
	create(resource: any): Promise<T | void>;
	putById(id: string, resource: any): Promise<T | void>;
	patchById(id: string, resource: any): Promise<T | void>;
	deleteById(id: string): Promise<T | void>;
}
