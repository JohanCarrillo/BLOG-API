export interface CRUD<T> {
	getAll(): Promise<Partial<T>[] | void>;
	getById(id: string): Promise<Partial<T> | null | void>;
	create(resource: any): Promise<Partial<T> | void>;
	putById(id: string, resource: any): Promise<Partial<T> | void>;
	patchById(id: string, resource: any): Promise<Partial<T> | void>;
	deleteById(id: string): Promise<Partial<T> | void>;
}
