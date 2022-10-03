export interface CRUD<T> {
	getAll(): Promise<T[] | void>;
	getById(id: string): Promise<T | void>;
	create(resource: any): Promise<T | void>;
	putById(id: string): Promise<T | void>;
	patchById(id: string): Promise<T | void>;
	deleteById(id: string): Promise<T | void>;
}
